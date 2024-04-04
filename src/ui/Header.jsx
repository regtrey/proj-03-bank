import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid var(--color-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: 2 / -1;
  grid-row: 1 / 2;

  @media screen and (max-width: 850px) {
    grid-column: 1 / -1;
  }
`;
