import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SearchingIcon } from '../svg/Searching';
import Tooltip from '../tooltip/Tooltip';

const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  .floatTooltip {
    transition: all 0.5;
    position: absolute;
    top: -60px;
  }
`;

export default function AshFront({ onClick }) {
  const [tooltip, setTooltip] = useState(false);
  return (
    <Person
      onClick={onClick}
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      {tooltip && (
        <div className='floatTooltip'>
          <Tooltip>
            <SearchingIcon />
          </Tooltip>
        </div>
      )}
      <Image src="/images/front.png" alt="Ash Ketchum" width={64} height={64} />
    </Person>
  );
}
