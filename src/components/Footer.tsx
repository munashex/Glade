import {  FaLeaf as Logo } from "react-icons/fa";  
import { FiArrowUpRight } from "react-icons/fi";
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
    name: "FAQs", 
    link: "#faqs"
    }, 
    
]


const Footer = () => { 



    return (
        <footer className="bg-[#1c3125]  mt-20 lg:mt-32 text-white px-3 md:px-6 py-12 lg:py-20 lg:px-16"> 
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-16"> 
            {/* first item */} 
            <div>
             <h1 className="flex items-center gap-3">
                <span><Logo size={38} color="#177245"/></span> 
                <h1 className="text-3xl text-white">Glade</h1>
             </h1>
             <a href="mailto:munashemugondaa@gmail.com"  className="group/item mt-5 lg:mt-7  hover:scale-105 transition  duration-100 delay-75 cursor-pointer inline-flex items-center gap-3 text-lg bg-green-200/15  py-2 rounded-full text-white px-6">
                    Fix your garden
                    <span className="bg-[#1c3125] p-2 rounded-full group-hover/item:rotate-45 transition duration-100 delay-75">
                        <FiArrowUpRight size={23} />
                    </span>
                </a>
            </div> 
            {/* second item */} 
            <div>
             <h1 className="text-3xl font-playfair">Contact</h1> 
             <div className="flex flex-col mt-3 lg:mt-5 gap-2">
                <a href="mailto:munashemugondaa@gmail.com" className="underline underline-offset-2 lg:text-lg">munashemugondaa@gmail.com</a>
                 <a href="tel:+27689526513" className="underline underline-offset-2 lg:text-lg">+27 689 526 513</a>
             </div>
            </div>  
            {/* third item  */} 
            <div>
               <h1 className="text-3xl font-playfair">Quick links</h1> 
               <div className="text-lg grid grid-cols-2 mt-3 lg:mt-5 gap-2 lg:gap-x-12">
               {navlinks.map((link) => (
               <span>{link.link.includes('#') ? 
                <a href={link.link}>{link.name}</a> : 
                <Link to={link.link}>{link.name}</Link>}</span>
                  ))}
               </div>
            </div>
          </div>

          <h1 className="mt-16 text-center lg:mt-24">© 2025 Glade. All rights reserved.</h1>
        </footer>
    )
}

export default Footer