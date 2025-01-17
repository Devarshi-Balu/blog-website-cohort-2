import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import SideBox from "../components/SideBox";
import { useImmer } from 'use-immer'
import { signinInput } from "@devarshi-balu/blog-website-common";
import { userBackend } from "../axios/backend";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
    const location = useLocation();
    const navigate = useNavigate();

    const initialState: signinInput = { email: "", password: "" };

    const [user, setUser] = useImmer<signinInput>(location.state || initialState);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
            <div className="flex justify-center h-screen text-center p-2">
                <div className="flex flex-col w-80 justify-center">
                    <div className="h-max p-4">
                        <div><Heading label={"Signin"} /></div>
                        <SubHeading label={"Don't have an account ? "} buttonText={"Signup"} to={'/signup'} />
                        <InputBox onChange={e => { setUser((draft) => { draft.email = e.target.value }) }} value={user.email} label={"Email"} placeholder="devarshibalu@gmail.com" />
                        <InputBox onChange={e => { setUser((draft) => { draft.password = e.target.value }) }} value={user.password} label={"Password"} placeholder="Helloword$1234@hi" />
                        <Button onClick={handleSinginClick} className="py-4" label={"Signin"} />
                    </div>
                </div>
            </div>
            <div className="justify-center h-screen bg-slate-200 p-2 hidden md:flex">
                <div className="flex flex-col justify-center">
                    <div className="h-max">
                        <SideBox mainContent='The customer support I recieved was exceptional. The support team went above and beyond to address
                    my concerns' authorName='Theresa Simpson' authorDetails={`SDE, Perspective Inc`} />
                    </div>
                </div>
            </div>
        </div>
    );

    async function handleSinginClick() {
        console.log(location);
        try {
            const res = await userBackend({
                url: '/signin',
                method: "post",
                data: user
            });
            console.dir(res.data);
            setUser(() => (initialState));
            localStorage.setItem("medium-token", res.data.token);
            navigate('/blogs');
        } catch (err: any) {
            console.dir(err.response.data.msg);
        }
    }
}