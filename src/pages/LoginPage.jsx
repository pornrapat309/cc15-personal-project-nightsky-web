import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage () {
    return (
        <div className="mx-10 pt-2 flex flex-col items-center gap-44 min-[900px]:pt-8 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
            <LoginContent />
            <LoginForm />
        </div>
    )
};