import styled from 'styled-components';
import { Button } from './Button';
import { useNavigate } from 'react-router';

const StyledPageNotFound = styled.div`
  height: 100dvh;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
    align-items: center;
  }
`;

const ErrorMessage = styled.h1`
  font-size: 6rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const Image = styled.img`
  height: 500px;
  width: 500px;
  display: block;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Image src="./searching.png" />
      <ErrorContainer>
        <ErrorMessage>
          Whoops! <br />
          Page not found
        </ErrorMessage>
        <Button $size="medium" onClick={() => navigate('/')}>
          Go back
        </Button>
      </ErrorContainer>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
