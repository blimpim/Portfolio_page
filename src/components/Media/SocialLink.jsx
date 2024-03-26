import './media.scss';

export default function SocialLink({ d, fill, href }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={d} fill={fill} />
        </svg>
      </a>
    </li>
  );
}
