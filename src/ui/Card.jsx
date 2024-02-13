import styled, { css } from 'styled-components';

const type = {
  acctBalance: css`
    background-color: var(--color-gray-800);
  `,
  balance: css`
    background-color: var(--color-gradient-bg);
    background-image: var(--color-gradient-mesh);
  `,
  creditBalance: css`
    width: 50%;
    background-color: var(--color-gray-800);
  `,
  loanBalance: css`
    width: 50%;
    background-color: var(--color-gray-800);
  `,

  expenses: css`
    background-color: var(--color-gray-800);
  `,
};

export const Card = styled.div`
  width: 100%;
  color: var(--color-gray-0);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2.5rem;
  position: relative;

  ${(props) => type[props.$type]}
`;

export const CardLogo = styled.img`
  height: 2rem;
  width: 6rem;
  display: block;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const BalanceDetails = styled.div`
  line-height: 1.2;
`;

export const CardTitle = styled.span`
  display: block;
  font-size: 1.2rem;
`;

export const Amount = styled.h1`
  font-size: 5rem;
`;

export const CardDetails = styled.div`
  width: max-content;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const CardNum = styled.span`
  font-family: 'Space Mono', monospace;
`;

export const CardName = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
