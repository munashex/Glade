import {  FaLeaf as Logo } from "react-icons/fa";  
import { LiaBarsSolid as MenuBar } from "react-icons/lia";
import { IoMdClose  as MenuClose} from "react-icons/io";
import { useState } from "react"; 
import { Link } from "react-router-dom";


const navlinks = [
    {
     name: "About", 
     link: "#about"
    },
    {
    name: "Services", 
    link: "#services"
    }, 
    {
    name: "Our work", 
    link: "#ourwork"
    }, 
    {
    name: "Blog", 
    link: "/blog"
    }, 
    {
    name: "FAQs", 
    link: "#faqs"
    }, 
    {
    name: "Contact", 
    link: "/contact"
    }
]

const Navbar = () => {
const [openNav, setOpenNav] = useState(false) 

const toggleMenu = () => {
    setOpenNav(!openNav)
}

    return (
        <div className="absolute left-0 right-0">
           {/* navbar on sm and md screens  */} 
           <div className="flex  items-center justify-between lg:hidden mx-3 mt-3 md:mx-6">
             <Link to="/" className="flex items-center gap-3">
                <span><Logo size={38} color="#177245"/></span> 
                <h1 className="text-3xl text-white">Glade</h1>
             </Link>

             <button onClick={toggleMenu} className="bg-gray-200 cursor-pointer p-2 rounded-full outline-none">
             <MenuBar size={38}/>
             </button>
           </div>
             
            {/* navlinks on sm and md screens */}
             {openNav ? 
             (
             <div className={`absolute lg:hidden   inset-0 min-h-screen bg-[#1c3125] animate-fade-left`}> 
              {/* logo and close menu section */}
              <div className="flex items-center mx-3 mt-3 md:mx-6 justify-between">
              <Link to="/" onClick={toggleMenu} className="flex items-center gap-3">
                <span><Logo size={38} color="#177245"/></span> 
                <h1 className="text-3xl text-white">Glade</h1>
             </Link>
               
             <button onClick={toggleMenu} className="bg-gray-200 cursor-pointer p-2 rounded-full outline-none">
             <MenuClose size={38}/>
             </button>
             </div>

             {/* navlinks  */} 

             <div className="text-white text-2xl flex flex-col items-center mt-7 gap-5"> 
                {navlinks.map((link) => (
                 <span>{link.link.includes('#') ? 
                <a href={link.link} onClick={toggleMenu}>{link.name}</a> : 
                <Link to={link.link} onClick={toggleMenu}>{link.name}</Link>}</span>
                ))}
             </div>

             </div>
             )  
             : null}


            {/* navbar on lg screens */} 
            <div className="hidden lg:flex justify-between mx-16 lg:mt-6">
            <Link to='/' className="flex items-center gap-3">
            <span><Logo size={38} color="#177245"/></span> 
            <h1 className="text-3xl text-white">Glade</h1>
             </Link> 

            <div className="flex gap-12 text-lg text-white bg-black/25  rounded-full items-center px-4">
            {navlinks.map((link) => (
            <span>{link.link.includes('#') ? 
            <a href={link.link} onClick={toggleMenu}>{link.name}</a> : 
            <Link to={link.link} onClick={toggleMenu}>{link.name}</Link>}</span>
            ))}
            </div>
            </div>
        </div> 

    )
}

export default Navbar