import { Link } from "react-router-dom";

export default function RegisterFormContent() {
    return (
        <>
            <h2 className="pb-2 text-3xl text-start font-bold">Sign up</h2>
            <span className="pb-2 font-normal text-start">If you have an accouct register you can</span>
            <Link to='/login' className="text-pink-500 font-bold">Login here!</Link>
        </>
    )
}