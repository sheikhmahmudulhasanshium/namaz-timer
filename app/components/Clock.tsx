"use client"
import { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timerID = setInterval(() => {
            // Update date object to trigger re-render every second
            setDate(new Date());
        }, 1000);

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(timerID);
    }, []);

    if (!isMounted) {
        return null;
    }

    // Extract date parts within the render function
    const day = date.toLocaleString('default', { weekday: 'long' });
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Convert hours to 12-hour format and determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    return (
        <div className="font-orbitron py-6 mx-6">
            <div className="flex justify-center space-x-4 py-5 text-5xl font-bold">
                <p className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{day}</p>
            </div>
            <div className="flex justify-center space-x-4 py-5 text-3xl font-bold">
                <p className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{dayOfMonth}</p>
                <p className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{month}</p>
                <p className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{year}</p>
            </div>
            <div className="bg-black text-slate-400 flex p-4 rounded-xl space-x-4 justify-center shadow-lg w-full">
                <div className="flex flex-col items-center justify-center w-16">
                    <p className="text-3xl font-digital">{hours.toString().padStart(2, '0')}</p>
                </div>
                <p className="text-3xl">:</p>

                <div className="flex flex-col items-center justify-center w-16">
                    <p className="text-3xl font-digital">{minutes}</p>
                </div>
                <p className="text-3xl">:</p>

                <div className="flex flex-col items-center justify-center w-16">
                    <p className="text-3xl font-digital">{seconds}</p>
                </div>
                <div className="flex flex-col items-center justify-center w-16">
                    <p className="text-3xl font-digital">{ampm}</p>
                </div>
            </div>
        </div>
    );
}

export default Clock;
