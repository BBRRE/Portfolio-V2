import React, {useState} from 'react'
import archi from "../assets/arch.jpg";
import eeng from "../assets/Schematics.png";



const Arcchi = () => {

  const slides = [
    { src: '/path-to-image1.jpg', text: 'Description for Image 1' },
    { src: '/path-to-image2.jpg', text: 'Description for Image 2' },
    { src: '/path-to-image3.jpg', text: 'Description for Image 3' },
  ];

  // Current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle next and previous slide navigation
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
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
            <div className="relative w-full max-w-lg mx-auto">
      {/* Slideshow Container */}
      <div className="relative">
        {/* Image with fade effect */}
        <div className="transition-opacity duration-500 ease-in-out">
          <img
            src={slides[currentSlide].src}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full rounded-lg opacity-100 transition-opacity duration-700"
            key={currentSlide}
          />
        </div>

        {/* Accompanying Text */}
        <p className="text-center mt-4 text-gray-700">{slides[currentSlide].text}</p>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
        >
          ▶
        </button>
      </div>
    </div>
            </div>

        </div>


        
        </div>
    </div>  
  )
}

export default Arcchi