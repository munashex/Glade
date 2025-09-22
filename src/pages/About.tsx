import { AiOutlinePlus as PlusIcon } from "react-icons/ai";
import serviceImage from '../assets/images/services/serviceImage.png'

const experienceData = [
{
years: 8, 
name: "Years experience"
}, 
{
years: 26, 
name: "Projects completed"
}, 
{
years: 19, 
name: "Happy customers"
},  
]

const About = () => {

    return (
        <div className="mx-3 md:mx-6 lg:mx-16 mt-16 lg:mt-36">
          <div className="flex flex-col gap-24 lg:flex-row">
            {/* first item  */}
            <div className="lg:w-1/2">
              <button className="text-lg bg-green text-white p-1 px-3 rounded-full">About us</button>
               <h1 className="text-3xl max-w-sm md:text-4xl lg:text-7xl lg:max-w-2xl  font-playfair font-bold mt-5 lg:mt-7">We are garden transformation specialists.</h1>
               <h1 className="mt-5 lg:mt-7  text-lg lg:text-2xl md:max-w-2xl lg:max-w-3xl">Glade helps transform tired gardens into gorgeous spaces you’ll enjoy with family and friends.</h1>
              
              <div className="mt-12 lg:mt-20 flex flex-col md:flex-row gap-x-24 gap-y-16">
                {experienceData.map((item) => (
                <div className='space-y-3' key={item.years}> 
                  <h1 className="inline-flex items-center gap-2 text-5xl">{item.years} <PlusIcon/></h1> 
                  <h1 className="text-xl">{item.name}</h1>
                </div>
                ))}
              </div>
            </div> 

            {/* second item  */} 
            <div className="lg:w-1/2">
             <img src={serviceImage} alt="glad-service" 
             className="rounded-2xl h-96 lg:h-[70%] w-full object-cover"/>
            </div>
          </div>
        </div>
    )
}

export default About