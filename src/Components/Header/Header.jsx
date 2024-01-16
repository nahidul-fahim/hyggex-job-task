import { Link } from "react-router-dom";
import websiteLogo from "../../assets/logo.png"




const Header = () => {


    const navLinks =
        <>
            <a href="#home" className="text-black font-medium hover:text-main duration-300">Home</a>
            <a href="#flashCard" className="text-black font-medium hover:text-main duration-300">Flashcard</a>
            <a href="#contact" className="text-black font-medium hover:text-main duration-300">Contact</a>
            <a href="#faq" className="text-black font-medium hover:text-main duration-300">FAQ</a>
            <Link><button className="bg-gradient-to-b from-[#06286E] to-[#164EC0] px-8 py-2 rounded-[40px] text-white font-medium hover:bg-gradient-to-t hover:scale-105 duration-500">Login</button></Link>
        </>



    return (
        <div className="flex justify-between items-center p-10 font-main">
            {/* website logo */}
            <div className="w-[30%]">
                <img src={websiteLogo} alt="" />
            </div>

            {/* navigation menu */}
            <div className="flex justify-end items-center gap-10 w-[70%]">
                {navLinks}
            </div>
        </div>
    );
};

export default Header;