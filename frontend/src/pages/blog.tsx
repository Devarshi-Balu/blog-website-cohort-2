import { useParams, useSearchParams } from 'react-router-dom'


export default function Blog() {
    const params = useParams();

    return (
        <div>
            Blog component
            <p>{JSON.stringify(params)}</p>
        </div>
    )
}