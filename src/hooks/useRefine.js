import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MAX_ITEMS_PER_PAGE = 5;

function useRefine() {
  const [searchParams] = useSearchParams();
  const transactions = useSelector((state) => state.accounts.transactions);

  const currentFilter = searchParams.get('select') || 'all';
  const currentSort = searchParams.get('sort') || 'dateValue-asc';
  const currentPage = searchParams.get('page') || 1;

  // FILTER
  const filtered = transactions.filter((item) => {
    if (currentFilter !== 'all') return item.message.includes(currentFilter);
    return transactions;
  });

  const numItems = filtered.length;

  // SORT
  const sortSplit = currentSort.split('-');
  const [sortField, sortDirection] = sortSplit;
  const sortOrder = sortDirection === 'asc' ? 1 : -1;
  const sorted = filtered.sort(
    (a, b) => (a[sortField] - b[sortField]) * sortOrder
  );

  // PAGINATION
  const startItem = currentPage * MAX_ITEMS_PER_PAGE - MAX_ITEMS_PER_PAGE;
  const endItem = currentPage * MAX_ITEMS_PER_PAGE;
  const refinedTransactions = sorted.slice(startItem, endItem);

  return { MAX_ITEMS_PER_PAGE, numItems, refinedTransactions };
}

export default useRefine;
