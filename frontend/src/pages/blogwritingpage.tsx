import { blogBackend } from '../axios/backend.ts';
import BlogWriting from '../components/BlogWriting.tsx';
import Navbar from '../components/Navbar.tsx'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


interface props {
    username?: string
}


const BlogWritingPage: React.FC<React.PropsWithChildren<props>> = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();


    return (
        <div className='h-screen'>
            <Navbar isWriting={true} onPublishClick={onPublishClick} />

            <div className='px-10 pl-20 h-96 mt-10'>
                <BlogWriting title={title} content={content} onChangeTitle={e => setTitle(e.target.value)} onChangeContent={e => setContent(e.target.value)} />
            </div>
        </div>
    );

    async function onPublishClick() {
        try {
            try {
                console.log(title, content);

                const res = await blogBackend({
                    url: "",
                    method: "post",
                    data: {
                        title,
                        content,
                    },
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("medium-token")
                    }
                });

                setTitle("");
                setContent("");
                navigate(`/blog/${res.data.postId}`, {
                    state: {
                        state: "redirect-from-blogs",
                        contents: {
                            title: title,
                            content: content,
                            id: res.data.postId,
                        }
                    }
                });
                alert("published succesfully");
            } catch (err: any) {
                console.log('error from backend : ', err.response.data.msg);
            }

        } catch (err) {
            // this catch blog is catch any erorr when the response of axios erorr fails by any chance
            console.log("error in publishing the blog");
        }
    }
}
export default BlogWritingPage;