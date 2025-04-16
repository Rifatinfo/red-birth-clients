/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/" },
        { name: "About", link: "/" },
    ];

    const handleNavClick = (item) => {
        setOpen(false);
    }

    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/100 to-transparent text-white ">
                <header className="max-w-[1550px] mx-auto bg-transparent  w-full flex justify-between items-center px-5 py-3  text-white">
                    {/* logo */}
                    <div>
                        {/* <img className="h-[40px] w-auto" src={logo} alt="logo" /> */}
                        <p className="text-3xl text-[#c73450] font-bold">REDBIRTH</p>
                    </div>

                    {/* desktop menu */}
                    <ul className="hidden xl:flex items-center gap-2 font-semibold text-xl">
                        {menuItems.map(item => (
                            <li key={item.name}
                                onClick={() => handleNavClick(item.name)}
                                className={`text-xl px-4 py-2 rounded-md cursor-pointer transition-all  text-orange-600" hover:text-[#c73450]}`}
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* button  */}
                    <div className="hidden md:flex items-center gap-3 font-semibold text-lg">
                        <button className="btn px-8 rounded-3xl py-2 border-2 shadow-none bg-[#c73450] text-white border-[#c73450]">Contact</button>
                    </div>

                    {/* mobile Menu Toggle Button  */}
                    <span className="lg:hidden block text-xl cursor-pointer mr-3"
                        onClick={() => setOpen(true)}
                    >
                        <IoMenu className="text-white" />
                    </span>
                </header>

                {/* background Overlay with Slide-in Effect */}
                <div className={`fixed inset-0 h-screen bg-gradient-to-r to-[#c73450] z-50 transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Click Outside to close  */}
                    <div className="absolute insert-0" onClick={() => setOpen(false)}></div>
                </div>

                {/* Mobile menu contain with Roll down effect  */}
                <div className={`fixed top-0 left-0 h-full bg-white w-full max-w-[350px] shadow-lg z-50 transition-all duration-500 ease-in-out transform ${open ? "translate-x-0" : "-translate-x-full"} ${open ? "max-h-screen overflow-hidden" : "max-h-0"}`}>
                    {/* close Button */}
                    <span className="absolute top-4 right-6 text-3xl cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <BiX className="text-[#c73450]" />
                    </span>

                    {/* Mobile menu Item */}
                    <ul className="font-semibold flex flex-col pt-10">
                        {menuItems.map((item) => (
                            <li key={item.name}
                                onClick={() => handleNavClick(item.name)}
                                className={`w-full list-none border-b text-xl px-6 py-3 cursor-pointer transition-all  text-[#c73450] }`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;