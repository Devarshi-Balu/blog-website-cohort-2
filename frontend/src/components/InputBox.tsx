import { ChangeEvent } from 'react';

interface props {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

const InputBox: React.FC<React.PropsWithChildren<props>> = ({ label, placeholder, onChange, value }) => {
    return (
        <div>
            <label htmlFor={`${label}`} className="py-3 block font-semibold text-lg text-left">{label}</label>
            <input id={`${label}`} onChange={onChange} value={value} className="px-2 py-2 w-full focus:ring focus:outline-none border-gray-900 border-2 rounded focus:border-transparent" type="text" placeholder={placeholder} />
        </div>
    );
}


export default InputBox;
