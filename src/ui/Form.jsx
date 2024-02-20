import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: 1.5rem;
`;

const error = {
  insufficient: css`
    border: 1px solid red;

    &:focus {
      outline: none;
    }
  `,
};

export const Input = styled.input`
  height: 4rem;

  ${(props) => error[props.$isEnough]};
`;

const variant = {
  transactions: css`
    height: 100%;
    border: 1px solid var(--color-gray-100);
    border-radius: 6px;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
      height: 5rem;
      font-size: 1.5rem;
    }
  `,
};

export const Select = styled.select`
  height: 4rem;
  margin-bottom: 1.5rem;
  ${(props) => variant[props.$variant]}
`;
