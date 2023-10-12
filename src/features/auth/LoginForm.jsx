import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

export default function LoginForm() {
    return (
        <form className="grid gap-7 text-white">
            <h2 className="pb-2 text-xl font-medium text-start">Sign in</h2>
            <h6 className="pb-2 font-medium text-start">If you don't have an accouct register you can Register here!</h6>
            <LoginInput
            type="text"
            placeholder="Enter your mobile number username or email"
            />
            <LoginInput
            type="password"
            placeholder="Enter your password"
            />
            <LoginButton />
        </form>
    )
};