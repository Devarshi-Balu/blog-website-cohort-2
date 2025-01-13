import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { blogBackend } from '../axios/backend.ts';
import Author from '../components/Author.tsx';
import Navbar from '../components/Navbar.tsx'
import Blog from '../components/blog.tsx';
import { atom, selector, selectorFamily, useRecoilValueLoadable } from "recoil"

interface props {
    username?: string
}

const BlogReading: React.FC<React.PropsWithChildren<props>> = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const id: string = useParams().id || "";
    console.log(id);

    const blogLoadable = location.state || useRecoilValueLoadable(blogSelector(id));

    let blog;
    switch (blogLoadable.state) {
        case "redirect-from-blogs": {
            blog = (<Blog title={blogLoadable.contents.title} content={blogLoadable.contents.content} key={blogLoadable.contents.id} />)
            break;
        }
        case "loading": {
            blog = <div>Hold on, The blog is loading</div>
            break;
        };
        case "hasError": {
            blog = <div>{blogLoadable.contents.message}</div>;
            break;
        };
        case "hasValue": {
            blog = (<Blog title={blogLoadable.contents.title} content={blogLoadable.contents.content} key={blogLoadable.contents.id} />)
            break;
        };
        default: "something is up";
    }

    return (
        <div>
            <Navbar />
            <div className='h-9/10 grid grid-cols-8 pl-20'>
                <div className="col-span-6">
                    {blog}
                </div>
                <Author authorName='Devarshi Balu' AuthorDetails='Sophomore @ NITPY' key={"kuchbi"} className='col-span-2' />
            </div>
        </div>
    )
}

export default BlogReading;

const blogSelector = selectorFamily({
    key: "blogFetchByIdSelectorFamily",
    get: (id: string) => async ({ get }) => {
        try {
            const res = await blogBackend({
                url: `/${id}`,
                method: "get",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("medium-token"),
                }
            });
            console.log(res);
            return res.data.post;
        } catch (err: any) {
            throw new Error(`Unable to fetch the post with the given id - ! POST NOT FOUND, \n message from backend:  ${err.message}`)
        }
    }
})