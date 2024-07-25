
import { FaBars } from 'react-icons/fa';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <div className="flex justify-between items-center py-6 font-semibold font-sans bg-cyan-900 text-white italic w-full ">
            <div className="flex items-center ">
                <button 
                    className="text-2xl p-2 focus:outline-none "
                    onClick={toggleSidebar}
                >
                    <FaBars className='m-4 text-4xl'/>
                </button>
            </div>
            <div className="flex-grow flex justify-center items-center space-x-6">
                <div className='bg-cover bg-lightLogo dark:bg-darkLogo w-20 h-20  ml-20'  />
                <p className="text-6xl bg-gradient-to-tl from-slate-500 to-yellow-100 dark:from-blue-500 dark:to-cyan-300 text-transparent bg-clip-text ">Namaz Timer</p>
            </div>
            <div className="w-16"></div> 
        </div>
    );
};

export default Header;