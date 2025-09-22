import { IoMdStar } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => (
    <div style={{scrollBehavior: "smooth"}}>

        {/* background image with text and button */}
        <div className="bg-[url(/HomeImage.png)]  min-h-screen bg-center w-full bg-cover">
            <div className="absolute bottom-30 bg-black/25 p-3 md:p-6 lg:p-10 mx-3 md:mx-6 lg:mx-16">

                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <IoMdStar key={index} size={20} color="white" />
                    ))}
                </div>

                <h1 className="text-lg text-white mt-1">Trusted by 50+ clients</h1>
                <h1 className="text-3xl max-w-sm md:text-4xl lg:text-7xl lg:max-w-2xl   text-white font-playfair font-bold mt-5 lg:mt-7">We'll create your dream garden</h1>
                <h1 className="mt-5 lg:mt-7 text-white text-lg lg:text-2xl md:max-w-2xl lg:max-w-3xl">Glade helps transform tired gardens into gorgeous spaces you’ll enjoy with family and friends.</h1>

                <Link to="/contact" className="group/item mt-5 lg:mt-7  hover:scale-105 transition  duration-100 delay-75 cursor-pointer inline-flex items-center gap-3 text-lg bg-green  py-2 rounded-full text-white px-6">
                    Fix your garden
                    <span className="bg-[#1c3125] p-2 rounded-full group-hover/item:rotate-45 transition duration-100 delay-75">
                        <FiArrowUpRight size={23} />
                    </span>
                </Link>
            </div>
        </div>

        {/* about us section  */}
        <section id="about" className="min-h-screen">
         <About/>
        </section>

    </div>
)

export default Home