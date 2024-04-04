import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 3rem;
  color: var(--color-gray-800);
  letter-spacing: -2px;

  @media screen and (max-width: 320px) {
    font-size: 2.75rem;
  }
`;
