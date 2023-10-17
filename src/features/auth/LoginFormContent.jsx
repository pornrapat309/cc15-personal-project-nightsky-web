import { Link } from "react-router-dom";

export default function LoginFormContent() {
    return (
        <>
            <h2 className="pb-2 text-3xl text-start font-bold">Sign in</h2>
            <span className="pb-2 font-normal text-start">If you don't have an accouct register you can</span>
            <Link to='/register' className="text-pink-500 font-bold">Register here!</Link>
        </>
    )
}