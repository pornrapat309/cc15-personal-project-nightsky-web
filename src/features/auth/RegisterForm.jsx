import RegisterInput from "./RegisterInput";
import RegisterButton from "./RegisterButton";

export default function RegisterForm() {
    return (
        <form className="grid gap-3 text-white">
            <h2 className="pb-2 text-xl font-medium text-start">Sign up</h2>
            <h6 className="pb-2 font-medium text-start">If you have an accouct register you can Login here!</h6>
            <RegisterInput
            type="text"
            placeholder="Mobile Number or Email"
            />
            <RegisterInput
            type="text"
            placeholder="Full Name"
            />
            <RegisterInput
            type="text"
            placeholder="Username"
            />
            <RegisterInput
            type="password"
            placeholder="Password"
            />
            <RegisterInput
            type="password"
            placeholder="Confirm password"
            />
            <RegisterButton />
        </form>
    )
}