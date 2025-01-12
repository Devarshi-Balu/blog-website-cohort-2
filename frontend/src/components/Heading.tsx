
interface props {
    label: string
}

const Heading: React.FC<React.PropsWithChildren<props>> = ({ label }) => {
    return (
        <div>
            <div className="font-bold text-4xl py-5 pb-4 tracking-wide">{label}</div>
        </div>
    );
}


export default Heading;



