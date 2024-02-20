import styled from 'styled-components';
import useRefine from '../hooks/useRefine';
import formatCurrency from '../utils/formatCurrency';

import { Heading } from '../ui/Heading';
import Pagination from '../ui/Pagination';
import Empty from '../ui/Empty';
import Filter from '../ui/Filter';
import Sort from '../ui/Sort';

const StyledTransactions = styled.div`
  height: 100%;
  padding: 3rem;

  display: grid;
  grid-template-columns: 1fr 33rem 25rem;
  grid-template-rows: 4rem 50rem auto;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 90vw;
    padding: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 50rem auto;
  }
`;

const TransactionsList = styled.ul`
  height: max-content;

  grid-column: 1 / -1;
  grid-row: 2 / 3;

  @media screen and (max-width: 768px) {
    width: 90vw;
    grid-row: 4 / 5;
  }
`;

const Transaction = styled.li`
  height: 10rem;
  border-bottom: 1px solid var(--color-gray-200);
  color: var(--color-gray-800);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* grid-column: 1 / -1;
  grid-row: 1 / 2; */

  &:first-of-type {
    border-top: 1px solid var(--color-gray-200);
  }
`;

const TransactionDetails = styled.h2`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  text-transform: capitalize;

  & span {
    font-size: 1rem;
    color: var(--color-gray-500);

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const TransactionAmount = styled.h3`
  font-size: 2.5rem;

  /* color: ${(props) => props.$gain && '#29a429'}; */

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

function Transactions() {
  const { MAX_ITEMS_PER_PAGE, numItems, refinedTransactions } = useRefine();

  return (
    <StyledTransactions>
      <Heading $type="transactions">Transactions</Heading>
      <Filter
        $type="transactions"
        variant="transactions"
        options={[
          { field: 'All', value: 'all' },
          { field: 'Deposit', value: 'deposit' },
          { field: 'Withdraw', value: 'withdraw' },
          { field: 'Credit', value: 'credit' },
          { field: 'Loan', value: 'loan' },
        ]}
      />
      <Sort />

      {!numItems ? (
        <Empty />
      ) : (
        <TransactionsList>
          {refinedTransactions.map((transaction, i) => (
            <Transaction key={i}>
              <TransactionDetails>
                {transaction.message} <span>{transaction.date}</span>
              </TransactionDetails>
              <TransactionAmount $gain={transaction.type === 'positive'}>
                {transaction.type !== 'positive' ? '-' : ''}
                {formatCurrency(transaction.amount)}
              </TransactionAmount>
            </Transaction>
          ))}
        </TransactionsList>
      )}

      <Pagination numItems={numItems} maxItems={MAX_ITEMS_PER_PAGE} />
    </StyledTransactions>
  );
}

export default Transactions;
