interface props {
    authorName: string,
    AuthorDetails: string,
    className?: string
}


const Author: React.FC<props> = ({ authorName, AuthorDetails, className }) => {
    return (
        <div className={className}>
            <div className="flex flex-col">
                <div className="text-lg px-3 font-medium font-sans pb-4 tracking-wider ">Author</div>
                <div className="flex justify-start gap-4 items-start px-2" >
                    <div className="w-14 h-14 rounded-full flex text-2xl text-white justify-center items-center font-bold p-2 bg-slate-400">{authorName[0]}</div>
                    <div className="flex flex-col justify-start items-start">
                        <div className="font-bold text-2xl text-left">{authorName}</div>
                        <div className="font-normal text-slate-500 text-base">{AuthorDetails}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Author;