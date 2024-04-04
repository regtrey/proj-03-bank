import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 100%;
    font-size: 2rem;
  `,

  medium: css`
    width: max-content;
    font-size: 2.5rem;
    padding: 2rem;

    @media screen and (max-width: 850px) {
      font-size: 2.25rem;
      padding: 1.75rem;
    }

    @media screen and (max-width: 767px) {
      font-size: 2rem;
      padding: 1.35rem;
    }
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

  &:disabled {
    background-color: var(--color-gray-300);
    cursor: default;
  }

  ${(props) => sizes[props.$size]}
`;
