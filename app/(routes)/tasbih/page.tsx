"use client"
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";
import Counter from "./components/body";

const Tasbih = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return ( 
        <div className="flex justify-between items-center flex-col min-w-max">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='bg-cover bg-center w-full  dark:bg-darkImage bg-lightImage h-screen flex justify-center items-center'>
                <Counter />
            </div>
        </div>
     );
}
 
export default Tasbih;