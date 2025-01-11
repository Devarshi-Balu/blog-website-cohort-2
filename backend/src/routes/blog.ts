import { Hono } from "hono";
import { blogMiddleware } from "../middlewares/blog";
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        jwt_secret: string
    },
    Variables: {
        userId: string,
        message: string,
        msg: string,
        prisma: PrismaClient
    }
}>();

blogRouter.use('/*', blogMiddleware);

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const userId: string = c.get('userId');

    const body = await c.req.json();
    // zod validation of library here

    try {
        const post = await prisma.post.create({
            data: {
                title: body.title as string,
                content: body.content as string,
                authorId: userId
            }
        });
        c.status(200);
        return c.json({
            msg: "posty created succesfully",
            postId: post.id
        });
    } catch (err: unknown) {
        c.status(400);
        return c.json({
            msg: "Erorr in creating the post"
        })
    }
});

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const userId = c.get('userId');
    const body = await c.req.json();

    // some zod validation here - updating the blog 
    try {
        const post = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId,
            },
            data: {
                title: body.title,
                content: body.content
            }
        });
        return c.json({
            msg: "Updated the blog",
            post
        })
    } catch (err) {
        c.status(400);
        return c.json({
            msg: "error while updating the blog, perhaps the id is not provied",
            err: JSON.stringify(err)
        })
    }
});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const posts = prisma.post.findMany({
        select: {
            title: true,
            content: true,
            author: {
                select: {
                    email: true,
                }
            }
        }
    });

    c.status(200);

    return c.json({
        msg: "Fetched all the posts",
        posts
    });
});

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const id = c.req.param('id');

    const userId = c.get('userId');

    try {
        const post = await prisma.post.findUnique({
            where: {
                authorId: userId,
                id: id
            },
            select: {
                title: true,
                content: true,
                id: true
            }
        });

        if (post) {
            c.status(200);
            return c.json({
                msg: "fetched the post succesfully",
                post
            });
        }

        return c.json({
            msg: "no post found with the given id from the author"
        });
    } catch (err) {
        return c.json({
            msg: "error while fetching the post"
        });
    }
});

export default blogRouter;
