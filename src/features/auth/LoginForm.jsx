import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobileOrUsername: '',
        password: ''
    });

    const {login} = useAuth();

    const handleSubmitForm = e => {
        e.preventDefault();
        login(input).catch(err => {
            console.log(err);
        });
    }

    return (
        <form 
        className="grid gap-7 text-white"
        onSubmit={handleSubmitForm}
        >
            <h2 className="pb-2 text-xl font-medium text-start">Sign in</h2>
            <h6 className="pb-2 font-medium text-start">If you don't have an accouct register you can Register here!</h6>
            <LoginInput
            placeholder="Enter your mobile number username or email"
            value={input.emailOrMobileOrUsername}
            onChange={e => setInput({...input, emailOrMobileOrUsername: e.target.value})}
            />
            <LoginInput
            type="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={e => setInput({...input, password: e.target.value})}
            />
            <LoginButton />
        </form>
    )
};