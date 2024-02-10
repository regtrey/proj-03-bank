import styled, { keyframes } from 'styled-components';
import { TbLoader2 } from 'react-icons/tb';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const MiniSpinner = styled(TbLoader2)`
  width: 1.8rem;
  height: 1.8rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default MiniSpinner;
