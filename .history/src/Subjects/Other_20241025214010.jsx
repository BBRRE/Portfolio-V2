import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import house from '../assets/NObg.png'
import Somalia from '../assets/Somalia.JPEG'
import Monkey from '../assets/Monkey.png'

const ImageWithDialog = ({ src, alt, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;  
    const y = e.clientY - rect.top;
    
    // Only show dialog if mouse is within image boundaries
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setIsHovered(true);
      setMousePosition({ x, y });
    } else {
      setIsHovered(false);
    }
  };

  return (
    <div 
      className="relative"
    >
      <img src={src} alt={alt} className="w-full object-cover rounded-lg cursor-pointer" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={ () =>{navigate('link')}}
            />
            
      
      <div
          className={`absolute p-4 bg-slate-100 rounded-lg shadow-lg transition-opacity duration-200 ${isHovered? 'opacity-100': 'opacity-0'} `}
          style={{
            left: Math.min(mousePosition.x + 20), // Prevent overflow
            top: mousePosition.y + 20,
            width: '200px',
            pointerEvents: 'none',
            zIndex: 50,
            transform: 'translate3d(0, 0, 0)',
            backdropFilter: 'blur(8px)',
            boxShadow: 'shadow-xl'
          }}
        >
          <p className="text-sm text-gray-800 font-inconsolata">{description}</p>
        </div>
    </div>
  );
};

const Other = () => {
const navigate = useNavigate()

  return (
    <div className="bg-[#F7F0D7] w-full min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ImageWithDialog
          src={house}
          alt="House"
          description="Observational drawing of building"
        />
        <ImageWithDialog
          src={Somalia}
          alt="Somalia"
          description="Watch concept based on the Cartier Crash"
        />
        <ImageWithDialog
          src={Monkey}
          alt="Monkey"
          description="Interactive article explaining Physics problem"
          link='https://bbrre.github.io/Monkey-Hunter-Problem/index.html'
        />
      </div>
    </div>
  );
};

export default Other;