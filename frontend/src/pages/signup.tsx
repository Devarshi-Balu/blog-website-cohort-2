import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import SideBox from "../components/SideBox";
import React from "react";
import { useImmer } from 'use-immer'
import { signupInput } from "@devarshi-balu/blog-website-common";
import { userBackend } from "../axios/backend";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    const initialState: signupInput = React.useMemo(() => ({
        email: "",
        password: "",
    }), []);

    const [user, setUser] = useImmer<signupInput>(initialState);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
            <div className="flex justify-center h-screen text-center p-2">
                <div className="flex flex-col w-80 justify-center">
                    <div className="h-max p-4">
                        <div><Heading label={"Signup"} /></div>
                        <SubHeading label={"Alredy have an account ? "} buttonText={"Signin"} to={'/signin'} />
                        <InputBox value={user.email} onChange={e => setUser((draft) => { draft.email = e.target.value })} label={"Email"} placeholder="devarshibalu@gmail.com" />
                        <InputBox value={user.password} onChange={e => setUser((draft) => { draft.password = e.target.value })} label={"Password"} placeholder="Helloword$1234@hi" />
                        <Button onClick={handleSignupClick} className="py-4" label={"Signup"} />
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

    async function handleSignupClick() {
        try {
            const res = await userBackend({
                url: '/signup',
                method: "post",
                data: user
            });
            console.log(res.data);
            localStorage.setItem("medium-token", res.data.token);
            navigate('/blogs');
        } catch (err: any) {
            console.log(err.response.data);
            navigate('/signin', {
                state: {
                    ...user
                },
            });
        }
    }
}