import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';

const StyledEmpty = styled.div`
  height: 53rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 2rem;

  grid-column: 1 / -1;
  grid-row: 2 / 3;

  @media screen and (max-width: 850px) {
    grid-row: 3 / 4;
  }

  @media screen and (max-width: 767px) {
    width: 90vw;
    height: max-content;
    flex-direction: column;
    padding: 0;
    padding-bottom: 3rem;
    gap: 1rem;

    grid-row: 4 / 5;
  }
`;

const EmptyImage = styled.img`
  width: 400px;
  height: 400px;
  display: block;

  @media screen and (max-width: 850px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`;

const EmptyMessage = styled.h2`
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 850px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }
`;

function Empty() {
  const navigate = useNavigate();

  return (
    <StyledEmpty>
      <EmptyImage src="empty.png" alt="Empty transactions image" />
      <EmptyMessage>
        It looks like you don&apos;t have any transactions yet...
        <Button $size="medium" onClick={() => navigate('/accounts')}>
          Make transactions
        </Button>
      </EmptyMessage>
    </StyledEmpty>
  );
}

export default Empty;
