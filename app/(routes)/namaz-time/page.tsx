"use client"
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";
import Body from "./components/Body";

const NamazTime = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return ( 
        <div className="flex justify-between  flex-col min-w-max h-screen">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='bg-cover bg-center w-full  dark:bg-darkImage bg-lightImage  flex '>
                <div className="justify-center items-center flex w-full overflow-y-scroll mt-8 sm:ml-12 ml-12 md:ml-0 lg:ml-0"><Body/></div>
            </div>
        </div>
     );
}
 
export default NamazTime;