import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';

const StyledEmpty = styled.div`
  height: 53rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 10px;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 2rem;

  grid-column: 1 / -1;
  grid-row: 2 / 3;
`;

const EmptyImage = styled.img`
  height: 400px;
  width: 400px;
  display: block;
`;

const EmptyMessage = styled.h2`
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
