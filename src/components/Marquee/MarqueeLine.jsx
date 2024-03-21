import './Marquee.scss';
import MarqueeDecor from './MarqueeDecor';
import Marquee from 'react-fast-marquee';

export default function MarqueeLine(props) {
  return (
    <section>
      <Marquee autoFill="true">
        <ul className="marquee">
          <li>{props.el1}</li>
          <li>
            <MarqueeDecor />
          </li>
          <li>{props.el2}</li>
          <li>
            <MarqueeDecor />
          </li>
          <li>{props.el3}</li>
          <li>
            <MarqueeDecor />
          </li>
        </ul>
      </Marquee>
    </section>
  );
}
