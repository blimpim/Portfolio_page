import WorkCard from './WorkCard';
import { works } from './worksCardsData';

import './Works.scss';

export default function Works(props) {
  return (
    <>
      <div className="works" id={props.id}>
        <ul>
          {works.map((work) => (
            <WorkCard key={work.id} work={work} length={works.length} />
          ))}
        </ul>
      </div>
    </>
  );
}
