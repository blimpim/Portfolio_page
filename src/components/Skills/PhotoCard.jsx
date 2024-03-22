import { useState } from 'react';
import './Skill.scss';

export default function PhotoCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('hovered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section>
      <img
        className="PhotoCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ right: isHovered ? '-25vw' : '-13vw' }}
        src="../assets/images/IMG_1279.JPG"
        alt="Photo of me"
      />
    </section>
  );
}
