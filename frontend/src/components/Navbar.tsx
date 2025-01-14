import mediumLogo from "../assets/medium-logo.png"
import { useNavigate } from "react-router-dom";

interface props {
    isWriting: boolean,
    onPublishClick?: () => void,
}
const Navbar: React.FC<props> = ({ isWriting, onPublishClick }) => {
    const navigate = useNavigate();

    return (
        <div className="h-16">
            <div className="flex justify-between mr-8">
                <div className="image flex items-center w-full ml-14 gap-4">
                    <button onClick={() => { navigate('/home') }}><img src={mediumLogo} alt="medium-logo " className="aspect-sqaure w-16" /></button>
                    <div className="text-lg font-medium text-slate-700 ">Draft in kirags</div>
                    <div className="text-base text-slate-400 font-normal">saved</div>
                </div>
                <div className="flex gap-4 mr-4 justify-between items-center">
                    <div className="flex flex-col justify-center">
                        {isWriting ? <button onClick={onPublishClick} type="button" className="text-white bg-[#1A8917]/90 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-4 h-max py-2  flex justify-center items-center  hover:bg-[#1a8917] ">publish</button> :
                            <button onClick={handleOnClickWriteNew} type="button" className="text-white bg-[#1A8917]/90 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-4 h-max py-2  flex justify-center items-center  hover:bg-[#1a8917] ">Write New</button>}
                    </div>
                    <div className="font-bold text-slate-700 flex flex-col justify-center ">
                        <button className="h-max w-max hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="font-bold h-8 w-8 text-slate-500 " viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button className="h-max w-max bg-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-9 w-9 text-slate-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button onClick={handleUserIconClickNavbar}>
                            <div className="h-12 w-12 flex items-center justify-center font-bold text-2xl p-3 bg-slate-200 rounded-full">H</div>
                        </button>
                    </div>
                </div>
            </div>

        </div >
    )


    function handleUserIconClickNavbar() {
        navigate('/blogs');
    }
    function handleOnClickWriteNew() {
        navigate('/blog/write/newBlog');
    }
}


export default Navbar;
