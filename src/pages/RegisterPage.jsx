import LoginAndRegisterContent from "../features/auth/LoginAndRegisterContent";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage () {
    return (
        <div className="mx-10 pt-2 flex justify-evenly items-center h-[70vh]">
            <LoginAndRegisterContent />
            <RegisterForm />
        </div>
    )
};