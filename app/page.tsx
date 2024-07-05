"use client"
import React, { useState } from 'react';
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    
    return (
        <div className="flex justify-between items-center flex-col min-w-max">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='bg-cover bg-center w-full  dark:bg-darkImage bg-lightImage h-screen flex justify-center items-center'>
                <Body />
            </div>
        </div>
    );
}
