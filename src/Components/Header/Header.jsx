import { Link, NavLink } from "react-router-dom";
import websiteLogo from "../../assets/logo.png"




const Header = () => {


    const navLinks =
        <>
            <NavLink>Home</NavLink>
            <NavLink>Flashcard</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>FAQ</NavLink>
            <Link><button className="bg-gradient-to-b from-[#06286E] to-[#164EC0] px-8 py-2 rounded-[40px] text-white font-medium hover:bg-gradient-to-t hover:scale-105 duration-500">Login</button></Link>
        </>



    return (
        <div className="flex justify-between items-center p-5 font-main">
            {/* website logo */}
            <div className="w-[30%]">
                <img src={websiteLogo} alt=""/>
            </div>

            {/* navigation menu */}
            <div className="flex justify-end items-center gap-10 w-[70%]">
                {navLinks}
            </div>
        </div>
    );
};

export default Header;