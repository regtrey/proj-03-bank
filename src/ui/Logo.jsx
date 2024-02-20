import styled from 'styled-components';

export const Logo = styled.h1`
  font-size: 5rem;
  color: var(--color-gray-800);
  letter-spacing: -6px;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: -4px;
  }
`;
