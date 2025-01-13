import Heading from "./Heading";
import SubHeading from "./SubHeading";


interface props {
    title: string,
    content: string,
    publishedDate?: string,
    className?: string
}


const Blog: React.FC<props> = ({ title, content, publishedDate = "29 Jan 2025", className }) => {
    return (
        <div className="flex flex-col items-start justify-start">
            <div className="font-sans">
                <Heading label={title} />
            </div>
            <div className="text-slate-400 text-base">Pusblished on 29th August 2025</div>
            <div className="mt-4 text-base font-sans">{content} -- some random -- content --Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita voluptates incidunt ullam nam veniam? Reiciendis praesentium inventore, commodi nemo recusandae nostrum officiis saepe voluptate beatae est ad error ipsam.
                Distinctio possimus harum quas tempora exercitationem fugit explicabo illo labore. Laudantium quaerat nemo quisquam aliquid tenetur magnam magni hic alias commodi, tempore, voluptatibus mollitia aliquam? Praesentium provident saepe quae laborum.
                Non debitis quo magnam blanditiis voluptatibus cumque explicabo natus officia pariatur repellendus commodi, dignissimos eos quaerat sed asperiores labore temporibus nisi reiciendis omnis sunt vel! Facilis, quam eaque. Nostrum, sapiente.
                Tempore similique recusandae debitis, facere consectetur atque, incidunt aperiam reiciendis dolorum necessitatibus unde eius repudiandae vero voluptatem quasi porro nobis iste officia non sequi. Temporibus itaque ipsa quaerat quia neque!</div>
        </div>
    )
}


export default Blog;
