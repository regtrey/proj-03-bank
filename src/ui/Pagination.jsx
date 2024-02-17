import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const StyledPagination = styled.div`
  font-size: 1.3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  grid-column: 1 / -1;
  grid-row: 3 / -1;
`;

const PageSelect = styled.select`
  font-size: 1.3rem;
  border-radius: 8px;
`;

function Pagination({ numItems, maxItems }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = numItems <= 5 ? 1 : Math.ceil(numItems / maxItems);
  const pages = new Array(totalPages).fill('val', 0);

  if (totalPages === 1) return;

  function handlePage(e) {
    const next = e.target.value;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      Page
      <PageSelect onChange={handlePage}>
        {pages.map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </PageSelect>
      of {totalPages}
    </StyledPagination>
  );
}

export default Pagination;
