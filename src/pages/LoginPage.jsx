import LoginAndRegisterContent from "../features/auth/LoginAndRegisterContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage () {
    return (
        <div className="mx-10 pt-2 flex justify-evenly items-center h-[70vh]">
            <LoginAndRegisterContent />
            <LoginForm />
        </div>
    )
};