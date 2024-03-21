import { useEffect, useState } from 'react';

export default function WorkCard({ work, length }) {
  const [image, setImage] = useState(window.innerWidth <= 768 ? work.src_mob : work.src);

  useEffect(() => {
    const changeImage = () => {
      const screenSize = window.innerWidth;
      if (screenSize <= 768) {
        setImage(work.src_mob);
      } else {
        setImage(work.src);
      }
    };

    window.addEventListener('resize', changeImage);
    return () => window.removeEventListener('resize', changeImage);
  }, [work.src, work.src_mob]);

  return (
    <>
      <li key={work.id} className="worksCard">
        <span>
          {work.id}
          <span id="worksCount">/0{length}</span>
        </span>
        <h1>{work.name.toUpperCase()}</h1>
        <p>{work.desc.toUpperCase()}</p>
        <div className="links_time">
          <ul>
            <li key={work.links.page}>
              <a href={work.links.page}>link for page/</a>
              <a href={work.links.code}> link for code/</a>
              <a href={work.links.design}>link for design/</a>
            </li>
          </ul>
          <div>
            <p>DATE/</p>
            <p className="date" {...work}>
              {work.date.toUpperCase()}
            </p>
          </div>
        </div>
        <img src={image} alt={work.alt} />
      </li>
    </>
  );
}
