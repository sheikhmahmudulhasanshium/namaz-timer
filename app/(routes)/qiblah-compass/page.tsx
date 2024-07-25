"use client"
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";
import { IoCompassOutline } from "react-icons/io5";
import Body from "./components/body";

const Compass = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return ( 
<div className="flex justify-between items-center flex-col min-w-max ">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='bg-cover bg-center w-full  dark:bg-darkImage bg-lightImage h-screen flex  justify-center items-center flex-col'>
                <div className="flex justify-center items-center font-semibold bg-gradient-to-tl from-blue-500 to-purple-500 dark:from-blue-950 dark:to-cyan-500 text-transparent bg-clip-text">
                    <p className="text-5xl  my-12">Quiblah C</p>
                    <IoCompassOutline className="text-5xl bg-cyan-100 rounded-full text-cyan-950"/>
                    <p className="text-5xl">mpass</p>
                </div>

                <Body/>
            </div>
        </div>        
        
    );
}
 
export default Compass;