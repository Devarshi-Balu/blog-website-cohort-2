interface props {
    mainContent: string,
    authorName: string,
    authorDetails: string
}


const SideBox: React.FC<React.PropsWithChildren<props>> = ({ mainContent, authorName, authorDetails }) => {

    return (
        <div className="flex max-w-lg flex-col">
            <div className="text-2xl tracking-wide font-semibold font-sans pb-2">"{mainContent}"</div>
            <div className="flex flex-col items-start">
                <div className="text-lg font-semibold font-mono tracking-wide">{authorName}</div>
                <div className="text-base font-mono traking-wide text-slate-500 ">{authorDetails}</div>
            </div>
        </div>
    )
}

export default SideBox;
