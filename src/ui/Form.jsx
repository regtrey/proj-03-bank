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

export const Select = styled.select`
  height: 4rem;
  margin-bottom: 1.5rem;
`;
