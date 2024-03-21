import './Media.scss';

import { media } from './media_data';
import SocialLink from './SocialLink';

export default function Media({ fill, className }) {
  return (
    <>
      <ul className={`media${className}`}>
        {media.map((link) => (
          <SocialLink fill={fill} key={link.d} {...link} />
        ))}
      </ul>
    </>
  );
}
