"use client"
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";
import Slides from "./components/slides";

const AsmaulHusna = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return ( 
        <div className="flex justify-between items-center flex-col min-w-max ">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='bg-cover bg-center w-full  dark:bg-darkImage bg-lightImage h-screen flex justify-center items-center flex-col'>
                <p className="text-5xl font-kaushan my-12">Asmaul Husna (Names of Allah)</p>
                <div className="flex flex-col justify-center items-center overflow-scroll w-max">
                    <Slides/>
                </div>
            </div>
        </div>     );
}
 
export default AsmaulHusna;