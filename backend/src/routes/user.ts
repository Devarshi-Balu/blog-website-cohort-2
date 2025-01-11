import { Hono } from "hono";
import { getPrisma } from "../db/db";
import { sign, decode, verify } from "hono/jwt"

import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";


const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        jwt_secret: string
    },
    variables: {
        userId: string,
        message: string,
        msg: string
    }
}>();

userRouter.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    // do some zod validation here

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        },
        select: {
            email: true,
            id: true,
        }
    });

    if (!user) {
        c.status(400);

        return c.json({
            msg: "user not found sign up in the sign up route"
        });
    }

    const token: string = await sign({
        userId: user.id
    }, c.env.jwt_secret);

    await prisma.token.create({
        data: {
            userId: user.id,
            token_name: token,
        }
    });

    return c.json({
        msg: "signed in succesfully",
        token
    });

})


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    // zod validation here 

    // existing user ? 
    const userExisting = await prisma.user.findUnique({
        where: {
            email: body.email
        },
        select: {
            email: true,
            id: true,
            Token: {
                select: {
                    token_name: true,
                    useremail: true
                }
            }
        }
    });

    if (!userExisting) {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });

        const token: string = await sign({
            id: user.id,
        }, c.env.jwt_secret);

        await prisma.token.create({
            data: {
                token_name: token,
                userId: user.id,
                useremail: user.email
            }
        });

        c.status(200);

        return c.json({
            msg: "user created successfully",
            token
        });
    }

    // do some redirect here , redirect the user to the signin page 
    // or tell them that there is alredy an existing user with the provided details

    c.status(411);
    c.redirect('/signin');

    return c.json({
        msg: "there is alredy an existing user with the given email, you can login",
        userExisting
    });
});

export default userRouter;