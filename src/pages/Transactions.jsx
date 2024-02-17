import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  grid-template-rows: 4rem 1fr auto;
  gap: 1.5rem;
`;

const TransactionsList = styled.ul`
  height: max-content;

  grid-column: 1 / -1;
  grid-row: 2 / 3;
`;

const Transaction = styled.li`
  height: 10rem;
  border-bottom: 1px solid var(--color-gray-200);
  color: var(--color-gray-800);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-column: 1 / -1;
  grid-row: 1 / 2;

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

  const currentPage = searchParams.get('page') || 1;
  const startItem = currentPage * MAX_ITEMS_PER_PAGE - MAX_ITEMS_PER_PAGE;
  const endItem = currentPage * MAX_ITEMS_PER_PAGE;

  const currentFilter = searchParams.get('select') || 'all';
  const currentSort = searchParams.get('sort') || 'amount-asc';

  const sortSplit = currentSort.split('-');
  const [sortField, sortDirection] = sortSplit;
  const sortOrder = sortDirection === 'asc' ? 1 : -1;

  const filtered = transactions.filter((item) => {
    if (currentFilter !== 'all') return item.message.includes(currentFilter);
    return transactions;
  });
  const numItems = filtered.length;

  const sorted = filtered.sort(
    (a, b) => (a[sortField] - b[sortField]) * sortOrder
  );
  const refinedTransactions = sorted.slice(startItem, endItem);

  return (
    <StyledTransactions>
      <Heading>Transactions</Heading>
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
