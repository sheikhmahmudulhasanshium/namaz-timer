import Image from 'next/image';
import Logo from '../../public/logo.png';
import { FaBars } from 'react-icons/fa';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <div className="flex justify-between items-center py-6 font-semibold font-sans bg-cyan-950 text-white italic w-full ">
            <div className="flex items-center">
                <button 
                    className="text-2xl p-2 focus:outline-none"
                    onClick={toggleSidebar}
                >
                    <FaBars className='m-4 text-4xl'/>
                </button>
            </div>
            <div className="flex-grow flex justify-center items-center space-x-6">
                <Image src={Logo} alt="logo" height={100} width={100} priority />
                <p className="text-6xl">Namaz Timer</p>
            </div>
            <div className="w-16"></div> 
        </div>
    );
};

export default Header;