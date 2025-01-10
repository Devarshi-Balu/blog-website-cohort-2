import { Hono } from 'hono'
import { cors } from 'hono/cors';
import blogRouter from './routes/blog';
import userRouter from './routes/user';


const app = new Hono();
app.use(cors());



app.get('/', (c) => {
  return c.text('Hello Hono! we are building a medium clone here')
});


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);



export default app;

