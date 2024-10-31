import React, {useState, useEffect  } from 'react'
import archi from "../assets/arch.jpg";
import eeng from "../assets/Schematics.png";



const Arcchi = () => {
    // Array of images and text
    const slides = [
      {
        image: archi,
        title: "Beautiful Mountains",
        description: "Majestic peaks reaching into the clouds, surrounded by pristine wilderness."
      },
      {
        image: eeng,
        title: "Coastal Sunset",
        description: "Golden rays paint the sky as waves gently lap against the shore."
      },
      {
        image: archi,
        title: "Urban Life",
        description: "The pulse of the city beats through its bustling streets and towering architecture."
      },
      {
        image: eeng,
        title: "Urban wwwwwww",
        description: "The pulse of the city beats through its bustling streets and towering architecture."
      }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);
    
    const nextSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setDisplayIndex(currentIndex);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    };
    
    const prevSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setDisplayIndex(currentIndex);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    };

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-italiana w-full h-full '>
        <div className='flex flex-col pt-[100px] gap-8 w-full'>

        <div className='bg-slate-200 max-w-[1200px] mx-auto ' >
          
            <div className='flex w-full mx-auto max-w-[1200px] h-[80vh]' >
              <img className='w-full object-cover rounded-sm' src={archi}/>
              <div className='w-3/5 pl-[20px] pt-[20px] my-auto' >
                <h1 className='text-xl font-inconsolata' >Redesiging the layout of an apartment</h1>
                <p className='ml-[20px] my-[15px] font-inconsolata' > Uk tower block built in the 1960's where designed to reduce the
                post-war housing shortage, many of these structures embraced a brutalist architectural style,
                building with concrete and other durable materials, focousing soeley on functionality.A recent exterior
                renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
                 with a complementary interior renovation.</p>
              </div>
            </div>

            <div className='h-screen' >
            <div className="max-w-4xl mx-auto">
      <div className="relative w-full h-96 overflow-hidden rounded-lg">
        {/* Bottom layer - current image and text */}
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          style={{
            opacity: isTransitioning ? 1 : 1
          }}
        >
          <img
            src={slides[displayIndex].image}
            alt={slides[displayIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-white text-2xl font-bold mb-2 transition-opacity duration-500">
              {slides[displayIndex].title}
            </h2>
            <p className="text-white/90 transition-opacity duration-500">
              {slides[displayIndex].description}
            </p>
          </div>
        </div>
        
        {/* Top layer - next image and text */}
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          style={{
            opacity: isTransitioning ? 1 : 0
          }}
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-white text-2xl font-bold mb-2 transition-opacity duration-500">
              {slides[currentIndex].title}
            </h2>
            <p className="text-white/90 transition-opacity duration-500">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full transition-opacity ${
            isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          disabled={isTransitioning}
        >
          Previous
        </button>
        
        <button 
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full transition-opacity ${
            isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          disabled={isTransitioning}
        >
          Next
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>

        </div>


        
        </div>
    </div>  
  )
}

export default Arcchi