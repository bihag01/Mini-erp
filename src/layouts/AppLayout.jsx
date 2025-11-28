import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";

export default function AppLayout() {

    return (
        <div className='w-[100vw] h-[100vh]'>
            <Navbar/>
            <main className='h-[94%]'>
                <Outlet/>
            </main>
        </div>
    )
}