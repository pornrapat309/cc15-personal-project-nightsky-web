import RegisterContent from "../features/auth/RegisterContent";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage () {
    return (
        <div className="mx-10 flex flex-col items-center gap-44 min-[900px] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
            <RegisterContent />
            <RegisterForm />
        </div>
    )
};