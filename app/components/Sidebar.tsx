import { FaTimes } from 'react-icons/fa';
import ModeToggle from './mode-toggle';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
                <div className='flex items-center gap-4 pt-4 text-4xl'><FaTimes className='text-red-500'/> <p>Menu</p></div>
            </button>
            <div className="flex flex-col w-full">
                {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'].map((option, index) => (
                    <button 
                        key={index}
                        className="border-b-4 border-b-slate-900 mb-3 py-2 w-full text-left transition-all duration-300 transform hover:scale-105 hover:bg-green-400 focus:outline-none pl-1"
                    >
                        {option}
                    </button>
                ))}
            </div>
            <button>
                <ModeToggle/>
            </button>
        </div>
    );
};

export default Sidebar;
