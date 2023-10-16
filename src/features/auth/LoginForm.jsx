import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useState } from "react";
import Joi from 'joi';
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";

const loginSchema = Joi.object({
    emailOrMobileOrUsername: Joi.string().required(),
    password: Joi.string().required()
});

const validateLogin = input => {
    const {error} = loginSchema.validate(input, {abortEarly: false});
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const {message, path} = el;
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
};

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobileOrUsername: '',
        password: ''
    });

    const [error, setError] = useState({});

    const {login} = useAuth();

    const handleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateLogin(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        login(input).catch(err => {
            console.log(err);
            if (err.response.data) {
                setError({
                    emailOrMobileOrUsername: err.response.data.message,
                    password: err.response.data.message
                });
            }
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
            name='emailOrMobileOrUsername'
            hasError={error.emailOrMobileOrUsername}
            />
            {error.emailOrMobileOrUsername && <InputErrorMessage message={error.emailOrMobileOrUsername}/>}
            <LoginInput
            type="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={e => setInput({...input, password: e.target.value})}
            name='password'
            hasError={error.password}
            />
            {error.password && <InputErrorMessage message={error.password}/>}
            <LoginButton />
        </form>
    )
};