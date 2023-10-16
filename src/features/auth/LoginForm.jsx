import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useState } from "react";
import Joi from 'joi';
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";
import LoginFormContent from "./LoginFormContent";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

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
        className="grid gap-7 w-96 text-white"
        onSubmit={handleSubmitForm}
        >
            <LoginFormContent />
            <LoginInput
            placeholder="Enter your mobile number username or email"
            value={input.emailOrMobileOrUsername}
            onChange={e => setInput({...input, emailOrMobileOrUsername: e.target.value})}
            name='emailOrMobileOrUsername'
            icon={<FiMail />}
            hasError={error.emailOrMobileOrUsername}
            />
            {error.emailOrMobileOrUsername && <InputErrorMessage message={error.emailOrMobileOrUsername}/>}
            <LoginInput
            type="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={e => setInput({...input, password: e.target.value})}
            name='password'
            icon={<RiLockPasswordLine />}
            hasError={error.password}
            />
            {error.password && <InputErrorMessage message={error.password}/>}
            <LoginButton />
        </form>
    )
};