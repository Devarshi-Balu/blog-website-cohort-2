import { Hono } from "hono";

const blogRouter = new Hono();


blogRouter.post('/', async (c) => {
    return c.text("blog route");
})


blogRouter.put('/', async (c) => {
    return c.text("put request in blog")
})

blogRouter.get('/bulk', async (c) => {
    return c.text(`this is bulk blog route`);
});

blogRouter.get('/:id', async (c) => {
    const { id } = c.req.param();

    return c.text(`get request /:id in blog, id of the blog is : ${id}`)
});





export default blogRouter;
