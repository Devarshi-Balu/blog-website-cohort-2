import { useState } from "react"

const BlogWriting: React.FC = ({ }) => {

    const [title, setTitle] = useState("");


    return (
        <div>
            <div className="h-max min-h-max w-full flex justify-center px-20 pl-0 pt-4 pb-2">
                {title.length == 0 &&
                    <div className="flex flex-col justify-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-14 w-14 stroke-1 stroke-slate-400  ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                }
                <input type="text" onChange={(e) => setTitle(e.target.value)} className={`text-4xl w-full caret-slate-300 border-l-2 border-l-slate-300 ml-2 pt-3 ${title.length > 0 && "text-slate-700 font-sans"} text-slate-700 focus:outline-none placeholder-gray-400  px-4 border-0 `} placeholder="Title" />
            </div >
            <div className="">
                <textarea name="" id="" className={` px-5 py-4 border-none  border-red-200 w-full h-full outline-none resize-none overflow-visible text-lg`} placeholder="Tell your story here"></textarea>

            </div>
        </div >
    )
}


export default BlogWriting;
