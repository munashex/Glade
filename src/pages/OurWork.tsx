import { workData } from "../data/work/data"
import { RiDoubleQuotesL as Quotes } from "react-icons/ri";
import { FaStar } from "react-icons/fa";




const OurWork = () => {

    return (
        <div className="mx-3 md:mx-6 lg:mx-16 mt-24 lg:mt-40">

         <div className="flex flex-col lg:flex-row lg:items-center gap-x-8 justify-between">
         <div>
         <button className="text-lg bg-green text-white p-1 px-3 rounded-full">Our Work</button>
         <h1 className="text-3xl max-w-sm md:text-4xl lg:text-7xl lg:max-w-2xl  font-playfair font-bold mt-5 lg:mt-7">We are garden transformation specialists.</h1>
         </div>
         <h1 className="mt-5 lg:mt-7  text-lg lg:text-2xl md:max-w-2xl lg:max-w-3xl">See how we’ve transformed spaces with our expert craftsmanship and attention to detail.</h1>
         </div>  

         <div className="mt-20 lg:mt-32 lg:space-y-24">
            {workData.map((item) => (
            <div key={item.name} className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 gap-x-9"> 
            {/* first item */}
            <img src={item.image} alt={item.name}  
            className="h-80 w-full object-cover rounded-3xl"
            />  
            {/* second item */}
            <div className="space-y-6"> 
            <h1 className="text-3xl font-bold">{item.name}</h1> 
            <h1>{item.description}</h1> 
            <h1 className="bg-[#1c3125] max-w-fit text-white px-4 py-1 rounded-full">{item.category}</h1>
            </div> 
            {/* third item  */} 
            <div className="flex flex-col justify-between gap-y-5"> 
              <h1 className="text-lg"><Quotes size={25}/>{item.review}</h1>  
               <span className="flex gap-2 mb-20">
               {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={17} color="#177245"/>
               ))}
               </span>
            </div>
            </div>
            ))}
         </div>

        </div>
    )
}

export default OurWork