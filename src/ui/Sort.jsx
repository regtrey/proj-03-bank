import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Select } from './Form';

const StyledSort = styled.div`
  display: flex;
  justify-content: flex-end;

  grid-column: 3 / -1;
  grid-row: 1 / 2;

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    justify-content: flex-start;
  }
`;

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSorting = searchParams.get('sort') || 'dateValue-asc';

  function handleSort(e) {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSort>
      <Select
        $variant="transactions"
        value={currentSorting}
        onChange={handleSort}
      >
        <option value="dateValue-asc">Sort by date (oldest to newest)</option>
        <option value="dateValue-desc">Sort by date (newest to oldest)</option>
        <option value="amount-asc">Sort by amount (lowest to highest)</option>
        <option value="amount-desc">Sort by amount (highest to lowest)</option>
      </Select>
    </StyledSort>
  );
}

export default Sort;
