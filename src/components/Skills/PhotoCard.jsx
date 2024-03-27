import { useState } from 'react';
import './Skill.scss';

export default function PhotoCard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); 
    console.log('clicked', !isClicked); 
  };

  return (
    <div className="PhotoCard" onClick={handleClick} style={{ left: isClicked ? '90%' : '60%' }}>
      
    </div>
  );}