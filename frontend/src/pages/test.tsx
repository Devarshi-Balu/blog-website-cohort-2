
import Navbar from '../components/Navbar.tsx'
interface props {
    username?: string
}


const Test: React.FC<React.PropsWithChildren<props>> = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}


export default Test;
