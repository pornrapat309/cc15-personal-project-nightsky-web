import { GiNightSky } from "react-icons/gi";

export default function Loading() {
    return (
        <>
            <div className="fixed inset-0 bg-gray-500 opacity-50 z-40"></div>
            <div className="fixed inset-0 z-50">
                <div className="flex justify-center items-center min-h-full">
                    <GiNightSky className="w-16 h-16 animate-bounce"/>
                </div>
            </div>
        </>
    )
        
}