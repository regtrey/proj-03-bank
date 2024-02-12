import styled from 'styled-components';
import { Button } from './Button';
import { useNavigate } from 'react-router';

const StyledPageNotFound = styled.div`
  height: 100dvh;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ErrorMessage = styled.h1`
  font-size: 6rem;
  font-weight: 500;
`;

const Image = styled.img`
  height: 500px;
  width: 500px;
  display: block;
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
        <Button onClick={() => navigate('/')}>Go back</Button>
      </ErrorContainer>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
