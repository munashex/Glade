import {  FaLeaf as Logo } from "react-icons/fa";  
import { LiaBarsSolid as MenuBar } from "react-icons/lia";

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
    link: "Contact"
    }
]

const Navbar = () => {

    return (
        <div className="mx-3 mt-3 md:mx-6 lg:mx-16 lg:mt-6">
           {/* navbar on sm and md screens  */} 
           <div className="flex  items-center justify-between lg:hidden">
             <div className="flex items-center gap-3">
                <span><Logo size={38} color="#177245"/></span> 
                <h1 className="text-3xl">Glade</h1>
             </div>

             <div className="bg-gray-200 p-2 rounded-full">
                <span><MenuBar size={38}/></span>
             </div>
           </div> 

            {/* navbar on lg screens */} 
            <div className="hidden lg:flex justify-between">
            <div className="flex items-center gap-3">
            <span><Logo size={38} color="#177245"/></span> 
            <h1 className="text-3xl">Glade</h1>
             </div> 

            <div className="flex gap-12 text-lg">
            {navlinks.map((link) => (
            <div> 
            <a>{link.name}</a>
            </div>
            ))}
            </div>
            </div>
        </div> 

    )
}

export default Navbar