import { Link } from "react-router-dom" 
import { FiArrowUpRight } from "react-icons/fi"
import { IoIosArrowDropdown as ArrowDown } from "react-icons/io";
import { faqsData } from "../data/faqs/data"; 
import { useState } from "react";

const Faq = () => {

const [accordin, setAccordin]  = useState(0)

    return (
        <div className="mx-3 md:mx-6 lg:mx-16 mt-16 lg:mt-40 flex flex-col lg:flex-row gap-x-12"> 
        <div>
        <button className="text-lg bg-green text-white p-1 px-3 rounded-full">FAQS</button>
        <h1 className="text-3xl max-w-sm md:text-4xl lg:text-7xl lg:max-w-2xl  font-playfair font-bold mt-5 lg:mt-7">Answering your questions</h1>
        <h1 className="mt-5 lg:mt-7  text-lg lg:text-2xl md:max-w-2xl lg:max-w-xl">Got more questions? Reach out to us using the button below</h1>
        
        <Link to="/contact" className="group/item mt-5 lg:mt-7  hover:scale-105 transition  duration-100 delay-75 cursor-pointer inline-flex items-center gap-3 text-lg bg-green  py-2 rounded-full text-white px-6">
         Get in touch
        <span className="bg-[#1c3125] p-2 rounded-full group-hover/item:rotate-45 transition duration-100 delay-75">
        <FiArrowUpRight size={23} />
        </span>
        </Link>
        </div>

        {/* faqs section */}
        <div className="mt-16 space-y-4">
      {faqsData.map((faq) => (
    <div key={faq.id} className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div 
        onClick={() => setAccordin(faq.id)} 
        className="flex justify-between items-center p-6 cursor-pointer outline-none"
      >
        <h1 className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">{faq.name}</h1> 
        <span className={`transform transition-transform duration-300 ${faq.id === accordin ? 'rotate-180' : ''}`}>
          <ArrowDown size={24} className="text-green" />
        </span>
      </div>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
        faq.id === accordin ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {faq.description}
        </div>
      </div>
    </div>
  ))}
</div>
</div>
    )
}

export default Faq 