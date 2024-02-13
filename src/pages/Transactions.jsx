import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import formatCurrency from '../utils/formatCurrency';

import { Heading } from '../ui/Heading';
import Pagination from '../ui/Pagination';
import Empty from '../ui/Empty';

const StyledTransactions = styled.div`
  height: 100%;
  padding: 3rem;
  overflow: hidden;
`;

const TransactionsList = styled.ul`
  height: max-content;
  margin: 1.5rem 0;
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

  /* color: ${(props) => props.$gain && '#29a429'}; */
`;

const MAX_ITEMS_PER_PAGE = 5;

function Transactions() {
  const [searchParams] = useSearchParams();

  const transactions = useSelector((state) => state.accounts.transactions);
  const numItems = transactions.length;

  const currentPage = searchParams.get('page') || 1;
  const startItem = currentPage * MAX_ITEMS_PER_PAGE - MAX_ITEMS_PER_PAGE;
  const endItem = currentPage * MAX_ITEMS_PER_PAGE;

  const filteredTransactions = transactions.slice(startItem, endItem);

  return (
    <StyledTransactions>
      <Heading>Transactions</Heading>

      {!numItems ? (
        <Empty />
      ) : (
        <TransactionsList>
          {filteredTransactions.map((transaction, i) => (
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
