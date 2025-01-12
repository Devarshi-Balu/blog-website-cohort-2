
interface props {
    label: string,
    className?: string,
    onClick: () => void
}

const Button: React.FC<React.PropsWithChildren<props>> = ({ label, className, onClick }) => {
    return (
        <div className={className}>
            <button onClick={onClick} type="button" className="w-full tracking-wider text-base text-white text-center bg-slate-900 hover:bg-slate-950 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded  px-5 py-2.5  items-center">
                {label}
            </button>
        </div>
    )
}

export default Button;