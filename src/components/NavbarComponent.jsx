import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
// import { FaXmark } from "react-icons/fa6";

import logo from "../assets/images/logo.png"


// React Icons
import { FaFacebook, FaXmark } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

function NavbarComponent() {

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen)
        // alert("Nav")
    }

    const [openRegester, setOpenRegister] = useState(true);

    const closeRegister = () => {
        setOpenRegister(!openRegester)

    }
    const [openLogin, setOpenLogin] = useState(true);

    const closeLogin = () => {
        setOpenLogin(!openLogin)
        // alert("working")

    }

    return (
        <>
            <nav className="flex justify-center items-center text-white ">

                <div className="mx-auto max-w-7xl h-[10vh] fixed top-0 flex justify-between items-center w-[85vw] px-5 z-10 bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                    <img src={logo} alt="" style={{ height: "9vh" }} />
                    <div className="justify-between w-[60%] hidden md:inline-flex">
                        <ul className="flex justify-center items-center gap-4 font-semibold">
                            <NavLink to="/" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Home</NavLink>
                            {/* <Link to="/About" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">About</Link> */}
                            <NavLink to="/Blogs" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Blogs</NavLink>
                            <NavLink to="/Write" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Write</NavLink>
                            <NavLink to="/Contact" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Contact</NavLink>
                        </ul>

                        <ul className="flex justify-center items-center gap-3 font-semibold">
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaFacebook /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaSquareInstagram /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaTwitter /></li>
                            <div
                                className={({ isActive }) => `${isActive ? "text-red-700 border-b-2 pb-2" : "text-gray-800"}`}>
                                <button
                                    onClick={closeRegister}
                                    className={`text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg `}>Register</button>
                            </div>
                            <div
                                className={({ isActive }) => `${isActive ? "text-red-700 border-b-2 pb-2" : "text-gray-800"}`}>
                                <button
                                    onClick={closeLogin}
                                    className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg "

                                >Login</button>
                            </div>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleNav} className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1">
                            {
                                navOpen ? <FaXmark /> : <FaBars />
                            }
                        </button>
                    </div>

                </div>

                <div className={`py-4 justify-between md:hidden bg-white rounded-md backdrop-filter z-10 backdrop-blur-lg bg-opacity-20
                ${navOpen ? "block top-16 fixed w-[85%]" : "hidden"}`}
                >
                    <ul className="flex justify-center items-center gap-2 font-semibold flex-col">
                        <Link to="/" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Home</Link>
                        {/* <Link to="/About" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">About</Link> */}
                        <Link to="/Blogs" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Blogs</Link>
                        <Link to="/Write" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Write</Link>
                        <Link to="/Contact" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Contact</Link>
                    </ul>

                    <ul className="flex justify-center items-center gap-4 font-semibold flex-col">
                        <span className="flex">
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaFacebook /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaSquareInstagram /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaTwitter /></li>
                        </span>
                        <button
                            onClick={closeRegister}
                            className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg ">Register</button>
                        <button
                            onClick={closeLogin}
                            className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg ">Login</button>
                    </ul>
                </div>

            </nav>

            <div id="register" className={`${openRegester ? "hidden" : "block"} z-10 absolute top-[20%] left-[8%] md:left-[35%] flex justify-center items-center flex-col md:w-[30vw] w-[80vw] h-[70vh] bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10`}>
                <button onClick={closeRegister}><FaXmark className='absolute top-3 right-3 font-bold text-2xl text-white' /></button>


                <h1 className="text-3xl text-white font-bold border-b-2 border-red-500 pb-1">Regester</h1>
                <form action="" className="flex flex-col w-[60%]">
                    <label htmlFor="fname" className="text-white py-1 pt-3">First Name<sup>*</sup></label>
                    <input type="text" name="fname" id="fname" required className="rounded-md p-2 outline-none" />

                    <label htmlFor="lname" className="text-white py-1 pt-3">Last name<sup>*</sup></label>
                    <input type="text" name="lname" id="lname" required className="rounded-md p-2 outline-none" />

                    <label htmlFor="email" className="text-white py-1 pt-3">Email<sup>*</sup></label>
                    <input type="email" name="email" id="email" required className="rounded-md p-2 outline-none" />

                    <label htmlFor="password" className="text-white py-1 pt-3">Password<sup>*</sup></label>
                    <input type="password" name="password" id="password" required className="rounded-md p-2 outline-none" />


                    <button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg mt-5">Regester</button>
                </form>
            </div>
            <div className={`${openLogin ? "hidden" : "block"} z-10 absolute top-[20%] left-[8%] md:left-[35%] flex justify-center items-center flex-col md:w-[30vw] w-[80vw] h-[70vh] bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10`}>
                <button onClick={closeLogin}><FaXmark className='absolute top-3 right-3 font-bold text-2xl text-white' /></button>

                <h1 className="text-3xl text-white font-bold pb-1 border-b-2 border-red-500">Login</h1>
                <form action="" className="flex flex-col w-[60%]">

                    <label htmlFor="email" className="text-white py-1 pt-3">Email<sup>*</sup></label>
                    <input type="email" name="email" id="email" className="rounded-md p-2 outline-none" required />

                    <label htmlFor="password" className="text-white py-1 pt-3">Password<sup>*</sup></label>
                    <input type="password" name="password" id="password" className="rounded-md p-2 outline-none" required />


                    <button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg mt-5">Login</button>
                </form>
            </div>
        </>
    )
}

export default NavbarComponent
