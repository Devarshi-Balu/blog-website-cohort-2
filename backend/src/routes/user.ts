import { Hono } from "hono";


const userRouter = new Hono();

userRouter.post('/signin', async (c) => {

    return c.text("user/signin");

})


userRouter.post('/signup', async (c) => {


    return c.text("user/signup");
});


export default userRouter;
