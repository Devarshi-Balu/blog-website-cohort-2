import Blog from "../components/Blog"
import Author from "../components/Author"

interface props {

}


const BlogPage: React.FC<React.PropsWithChildren<props>> = () => {

    return (
        <div className="grid grid-cols-6 justify-start pl-10 pr-0 pt-10  h-screen ">
            <div className="px-4 col-span-4">
                <Blog title={"My first Blog post "} content={"aksjdfhksjdh sadjfgsjdgf askjdfhkasjdfhk skdjfhksdjfh"} publishedDate={"29 August 2025"} />
            </div>
            <div className="col-span-2 pt-6">
                <Author authorName="James Clear" AuthorDetails="CEO, Acme Inc, Enterpreneur, Author, Atomic Habits" />
            </div>
        </div>
    )
}


export default BlogPage;
