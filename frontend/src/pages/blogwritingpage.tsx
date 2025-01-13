
import BlogWriting from '../components/BlogWriting.tsx';
import Navbar from '../components/Navbar.tsx'

interface props {
    username?: string
}


const BlogWrinting: React.FC<React.PropsWithChildren<props>> = () => {
    return (
        <div className='h-screen '>
            <Navbar />
            <div className='px-10 pl-20 h-96 mt-10'>
                <BlogWriting />
            </div>
        </div>
    )
}


export default BlogWriting;
