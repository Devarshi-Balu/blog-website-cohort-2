import { Hono } from "hono";
import { getPrisma } from "../db/db";
import { sign, decode, verify } from "hono/jwt"


const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        jwt_secret: string
    },
    variables: {

    }
}>();

userRouter.post('/signin', async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL);


    return c.text("user/signin");
})


userRouter.post('/signup', async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL);

    const body = await c.req.json();
    // zod validation here 

    // existing user ? 
    const userExisting = await prisma.user.findUnique({
        where: {
            email: body.email
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
                token,
                userId: user.id
            }
        })

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
        msg: "there is alredy an existing user with the given email, you can login"
    });
});


export default userRouter;
