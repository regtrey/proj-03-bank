import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 100%;
    font-size: 2rem;
  `,
};

export const Button = styled.button`
  width: 20rem;
  font-size: 3rem;
  background-color: var(--color-primary-400);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  outline: none;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-500);
  }

  ${(props) => sizes[props.$size]}
`;
