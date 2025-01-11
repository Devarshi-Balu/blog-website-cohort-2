import { Context, Hono } from "hono"
import { sign, decode, verify } from "hono/jwt"




async function blogMiddleware(c: Context, next: () => Promise<void>) {
    const authHeader: string | undefined = c.req.header('Authorization');

    if (authHeader?.startsWith("Bearer") && authHeader?.split(" ")[1]) {
        const accessToken: string = authHeader.split(" ")[1];

        try {
            const data = await verify(accessToken, c.env.jwt_secret);
            const userId = (data.userId as string);
            c.set("userId", userId);
            return await next();
        } catch (err) {
            c.status(400);
            return c.json({
                msg: "Token is invalid, authentication failed",
                err: (err as Error).message
            })
        }
    }

    c.status(402);
    return c.json({
        msg: "token not provided"
    });
}

export {
    blogMiddleware
}