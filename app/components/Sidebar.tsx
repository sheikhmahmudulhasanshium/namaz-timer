"use client"; 
import { FaTimes } from 'react-icons/fa';
import ModeToggle from './mode-toggle';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const optionList = ['Home', 'Qiblah Compass', 'Tasbih', 'Namaz Time', 'Asmaul Husna', 'Quran', 'Help'];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleOptionClick = (option: string) => {
        const formattedOption = option.toLowerCase().replace(/\s+/g, '-');
        const url = formattedOption==='home'?'/':`/${formattedOption}`;
        if (isMounted) {
            router.push(url);
        }
    };

    if (!isMounted) {
        return null; // or a loading indicator if preferred
    }

    return (
        <div
            className={`flex flex-col bg-slate-200 dark:bg-slate-700 justify-between items-center py-8 px-6 shadow-lg fixed top-0 left-0 h-full transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <button
                className="text-2xl font-bold mb-6 focus:outline-none transition-transform duration-300 transform hover:scale-105"
                onClick={toggleSidebar}
            >
                <div className="flex items-center gap-4 pt-4 text-4xl">
                    <FaTimes className="text-red-500" />
                    <p>Menu</p>
                </div>
            </button>
            <div className="flex flex-col w-full">
                {optionList.map((option, index) => (
                    <button
                        key={index}
                        className="border-b-4 border-b-slate-900 mb-3 py-2 w-full text-left transition-all duration-300 transform hover:scale-105 hover:bg-green-400 focus:outline-none pl-1"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <button>
                <ModeToggle />
            </button>
        </div>
    );
};

export default Sidebar;
