import './media.scss';

export default function SocialLink({ d, fill }) {
  return (
    <li>
      <a href="https://github.com/blimpim">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={d} fill={fill} />
        </svg>
      </a>
    </li>
  );
}
