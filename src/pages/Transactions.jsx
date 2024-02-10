import styled from 'styled-components';
import { useSelector } from 'react-redux';
import formatCurrency from '../utils/formatCurrency';

import { Heading } from '../ui/Heading';

const StyledTransactions = styled.div`
  height: 100%;
  padding: 3rem;
`;

const TransactionsList = styled.ul`
  height: max-content;
  margin-top: 1.5rem;
`;

const Transaction = styled.li`
  height: 10rem;
  border-bottom: 1px solid var(--color-gray-200);
  color: var(--color-gray-800);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-of-type {
    border-top: 1px solid var(--color-gray-200);
  }
`;

const TransactionDetails = styled.h2`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  & span {
    font-size: 1rem;
    color: var(--color-gray-500);
  }
`;

const TransactionAmount = styled.h3`
  font-size: 2.5rem;

  color: ${(props) => props.$gain && '#29a429'};
`;

function Transactions() {
  const transactions = useSelector((state) => state.accounts.transactions);

  return (
    <StyledTransactions>
      <Heading>Transactions</Heading>
      <TransactionsList>
        {transactions.map((transaction, i) => (
          <Transaction key={i}>
            <TransactionDetails>
              {transaction.type} <span>{transaction.date}</span>
            </TransactionDetails>
            <TransactionAmount $gain={transaction.type === 'Deposit'}>
              {transaction.type !== 'Deposit' && '-'}
              {formatCurrency(transaction.amount)}
            </TransactionAmount>
          </Transaction>
        ))}
      </TransactionsList>
    </StyledTransactions>
  );
}

export default Transactions;
