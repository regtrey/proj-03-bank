import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { FilterButton } from './FilterButton';

const StyledFilter = styled.div`
  border: 1px solid var(--color-gray-100);
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  grid-column: 2 / -1;
  grid-row: 1 / 2;
`;

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const curSelected = searchParams.get('select') ?? 'savings';

  function handleSelect(e) {
    searchParams.set('select', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option, i) => (
        <FilterButton
          key={i}
          value={option.value}
          $active={curSelected === option.value}
          onClick={(e) => handleSelect(e)}
        >
          {option.field}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
