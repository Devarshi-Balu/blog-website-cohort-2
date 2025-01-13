// this file is just used for the component checking purposes 

import Blogs from './blogs.tsx';

interface props {
    username?: string
}


const Test: React.FC<React.PropsWithChildren<props>> = () => {

    return (
        <div>
            <Blogs />
        </div>
    )
}


export default Test;
