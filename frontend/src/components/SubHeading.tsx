
import React from "react"
import { Link } from "react-router-dom";

interface props {
    label: string,
    to: string,
    buttonText: string
}

const SubHeading: React.FC<React.PropsWithChildren<props>> = ({ label, buttonText, to }) => {

    return (
        <div>
            <div className="font-semibold text-base pb-2  text-gray-700">{label}
                <Link to={to} className="underline">{buttonText} </Link>
            </div>
        </div>
    );
}


export default SubHeading;



