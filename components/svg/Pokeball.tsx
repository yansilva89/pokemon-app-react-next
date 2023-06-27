import styled from 'styled-components';

interface PokeballIconProps {
  className?: string;
  onClick?: () => void;
}

const Pokeball = styled(PokeballIcon)`
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: sticky;
  bottom: 28px;
  @media (max-width: 500px) {
    width: 64px;
    height: 64px;
  }
`;
function PokeballIcon({ className, onClick }: PokeballIconProps) {
  return (
    <svg className={className} onClick={onClick} viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.5077 53.1247C46.8264 53.1247 52.0971 48.6507 53.3484 42.7063H74.3689C72.8831 59.9921 58.3845 73.5549 40.7267 73.5549C23.0688 73.5549 8.55462 59.9921 7.08443 42.7063H27.667C28.9183 48.6664 34.189 53.1247 40.5077 53.1247Z" fill="white"/>
    <path d="M33.0005 72.6789C18.9868 69.3938 8.33577 57.3954 7.08455 42.7063H15.3739C16.2028 56.0344 23.194 67.3289 33.0005 72.6789Z" fill="#C5CEE0"/>
    <path d="M32.7657 40.0002C32.7813 40.0002 32.7813 40.0002 32.7657 40.0002C32.7813 39.046 32.9533 38.1386 33.2661 37.2939C34.361 34.353 37.1919 32.2724 40.5076 32.2724C43.8233 32.2724 46.6542 34.3686 47.749 37.2939C48.0618 38.1386 48.2339 39.046 48.2339 40.0002H48.2182C48.2182 40.9544 48.0462 41.8618 47.7334 42.7065C46.6386 45.6474 43.8077 47.728 40.4919 47.728C37.1762 47.728 34.3453 45.6318 33.2505 42.7065C32.9377 41.8774 32.7657 40.9544 32.7657 40.0002Z" fill="white"/>
    <path d="M40.492 26.8907C34.1733 26.8907 28.9026 31.3646 27.6513 37.3091H6.63081C8.11664 20.0076 22.6152 6.44482 40.2887 6.44482C57.9622 6.44482 72.4451 20.0076 73.9309 37.2935H53.3327C52.0814 31.349 46.8107 26.8907 40.492 26.8907Z" fill="#DB2C66"/>
    <path d="M15.3738 37.2939H6.64658C7.92908 22.3545 18.9398 10.184 33.3132 7.16486C23.3347 12.4367 16.2184 23.8406 15.3738 37.2939Z" fill="#DB2C66"/>
    <path d="M40.2889 6.44505C22.6154 6.44505 8.11682 20.0078 6.64664 37.2937H27.6672C28.9184 31.3492 34.1892 26.8752 40.5078 26.8752C46.8265 26.8752 52.0973 31.3492 53.3485 37.2937H73.9311C72.4453 20.0078 57.9467 6.44505 40.2889 6.44505ZM33.2664 37.2937C32.9536 38.1384 32.7815 39.0458 32.7815 40H32.7659C32.7659 40.9542 32.9379 41.8616 33.2507 42.7063C34.3456 45.6472 37.1764 47.7278 40.4922 47.7278C43.8079 47.7278 46.6388 45.6316 47.7336 42.7063C48.0464 41.8616 48.2185 40.9542 48.2185 40H48.2341C48.2341 39.0458 48.0621 38.1384 47.7493 37.2937C46.6545 34.3528 43.8236 32.2722 40.5078 32.2722C37.1921 32.2722 34.3612 34.3684 33.2664 37.2937ZM40.7268 73.5706C58.4003 73.5706 72.8988 60.0078 74.369 42.7219H53.3485C52.0973 48.6664 46.8265 53.1404 40.5078 53.1404C34.1892 53.1404 28.9184 48.6664 27.6672 42.7219H7.06892C8.55475 59.9922 23.0533 73.5706 40.7268 73.5706ZM40.5078 0C62.5919 0 80.5 17.9116 80.5 40C80.5 62.0884 62.5919 80 40.5078 80C18.4238 80 0.500003 62.104 0.500003 40C0.500003 17.896 18.4081 0 40.5078 0Z" fill="#101426"/>
    </svg>
    
  );
}

export { Pokeball };