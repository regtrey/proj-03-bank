import styled from 'styled-components';

export const FilterButton = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  background-color: var(--color-gray-0);
  color: var(--color-gray-800);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-400);
    color: var(--color-gray-0);
  }

  background-color: ${(props) => props.$active && 'var(--color-primary-400)'};
  color: ${(props) => props.$active && 'var(--color-gray-0)'};
`;
