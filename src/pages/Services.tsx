import { servicesData } from "../data/services/data"

const Services = () => {

    return (
        <div className="mx-3 md:mx-6 lg:mx-16 mt-24 lg:mt-0">
          <div className="flex flex-col items-center">
          <button className="text-lg bg-green text-white p-1 px-3 rounded-full">Services</button>
          <h1 className="text-3xl  md:text-4xl lg:text-7xl  font-playfair font-bold mt-5 lg:mt-7">What we do</h1> 
          <h1 className="mt-2 lg:mt-5 text-center  text-lg lg:text-2xl md:max-w-2xl lg:max-w-3xl">Find out which one of our services fit the needs of your garden</h1>
          </div> 
          

          {/* types of services cards */} 
          <div className="mt-20 grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {
             servicesData.map((item) => (
             <div className="bg-[#eaeae7] pb-8 rounded-3xl"> 
                <img src={item.image} alt={`glade-${item.name}`} 
                className="h-96 w-full object-cover rounded-3xl"
                /> 

                <div className="p-3"> 
                <h1 className="text-3xl font-bold mt-3">{item.name}</h1> 
                <h1 className="mt-2">{item.description}</h1> 

                <div className="mt-7"> 
                    <h1 className="font-semibold text-lg">Perfect for</h1> 
                    <h1>{item.perfectFor}</h1>
                </div>

                <div className="mt-5"> 
                    <h1 className="font-semibold text-lg">Estimated Duration</h1> 
                    <h1>{item.duration}</h1>
                </div>

                <div className="mt-5"> 
                    <h1 className="font-semibold text-lg">Ideal Budget Range</h1> 
                    <h1>{item.budget}</h1>
                </div>

                </div>
             </div>
             ))
            }
          </div>

        </div>
    )
}

export default Services