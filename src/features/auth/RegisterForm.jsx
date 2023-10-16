import RegisterInput from "./RegisterInput";
import RegisterButton from "./RegisterButton";
import { useState } from "react";
import Joi from 'joi';
import InputErrorMessage from "./InputErrorMessage";
import {useAuth} from "../../hooks/use-auth";
import RegisterFormContent from "./RegisterFormContent";
import { FiMail, FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";


const registerSchema = Joi.object({
    fullName: Joi.alternatives([
        Joi.string().trim(),
        ''
    ]),
    username: Joi.string().trim().required(),
    emailOrMobile: Joi.alternatives([
        Joi.string().email({tlds: false}),
        Joi.string().pattern(/^[0-9]{10}$/)
    ]).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/).trim().required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required()
});

const validateRegister = input => {
    const {error} = registerSchema.validate(input, {abortEarly: false});
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const {message, path} = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
};

export default function RegisterForm() {
    const [input, setInput] = useState({
        fullName: '',
        username: '',
        emailOrMobile: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({});

    const {register} = useAuth();

    const handleChangeInput = e => {
        setInput({...input, [e.target.name]: e.target.value})
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        register(input).catch(err => {
            console.log(err);
            if (err.response.data.emailOrMobileOrUsernameExist) {
                setError({
                    emailOrMobile: 'emailOrMobile or username is already in use',
                    username: 'emailOrMobile or username is already in use'
                });
            }
        });
    };

    return (
        <form 
        className="grid gap-3 w-96 text-white" 
        onSubmit={handleSubmitForm}
        >
            <RegisterFormContent />
            <RegisterInput
            type="text"
            placeholder="Mobile Number or Email"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            name='emailOrMobile'
            icon={<FiMail />}
            hasError={error.emailOrMobile}
            />
            {error.emailOrMobile && <InputErrorMessage message={error.emailOrMobile}/>}

            <RegisterInput
            type="text"
            placeholder="Full Name"
            value={input.fullName}
            onChange={handleChangeInput}
            name='fullName'
            icon={<FiUser />}
            hasError={error.fullName}
            />
            {error.fullName && <InputErrorMessage message={error.fullName}/>}

            <RegisterInput
            type="text"
            placeholder="Username"
            value={input.username}
            onChange={handleChangeInput}
            name='username'
            icon={<FiUser />}
            hasError={error.username}
            />
            {error.username && <InputErrorMessage message={error.username}/>}

            <RegisterInput
            type="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChangeInput}
            name='password'
            icon={<RiLockPasswordLine />}
            hasError={error.password}
            />
            {error.password && <InputErrorMessage message={error.password}/>}

            <RegisterInput
            type="password"
            placeholder="Confirm password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name='confirmPassword'
            icon={<RiLockPasswordLine />}
            hasError={error.confirmPassword}
            />
            {error.confirmPassword && <InputErrorMessage message={error.confirmPassword}/>}

            <RegisterButton />
        </form>
    )
};