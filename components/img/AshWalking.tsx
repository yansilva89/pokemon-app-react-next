import styled from 'styled-components';
import Image from 'next/image';
import Tooltip from '../tooltip/Tooltip';
import { LoadingIcon } from '../svg/Loading';

const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  .floatTooltip {
    transition: all 0.5;
    position: absolute;
    top: -62px;
  }
`;

export default function AshWalking() {
  return (
    <Person>
      <div className='floatTooltip'>
        <Tooltip>
          <LoadingIcon />
        </Tooltip>
      </div>
      <Image src="/images/walking.png" alt="Ash Walking" width={44} height={54} />
    </Person>
  );
}
