import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    return (
        <div className="h-[100vh] w-[100vw]">
            <Outlet />
        </div>
    )
}