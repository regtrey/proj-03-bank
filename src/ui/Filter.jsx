import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { FilterButton } from './FilterButton';

const type = {
  accounts: css`
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  `,
  transactions: css`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  `,
};

const StyledFilter = styled.div`
  border: 1px solid var(--color-gray-100);
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  ${(props) => type[props.$type]}
`;

function Filter({ options, variant = 'default' }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let curSelected;
  if (variant === 'default')
    curSelected = searchParams.get('select') ?? 'debit';
  if (variant === 'transactions')
    curSelected = searchParams.get('select') ?? 'all';

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
