import styled from 'styled-components';
import { HiOutlineCircleStack, HiOutlineCreditCard } from 'react-icons/hi2';

const StyledBills = styled.div`
  width: 100%;
  background-color: var(--color-gray-800);

  color: var(--color-gray-0);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  & svg {
    height: 6rem;
    width: 6rem;
    color: var(--color-secondary-400);
  }
`;

const BillContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TotalExpenses = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const ExpensesSpan = styled.span`
  font-size: 1.5rem;
`;

function Bills() {
  return (
    <StyledBills>
      <BillContainer>
        <HiOutlineCreditCard />
        <TotalExpenses>
          <ExpensesSpan>Credit card bill</ExpensesSpan> $420.69
        </TotalExpenses>
      </BillContainer>

      <BillContainer>
        <HiOutlineCircleStack />
        <TotalExpenses>
          <ExpensesSpan>Loan balance</ExpensesSpan> $1383.07
        </TotalExpenses>
      </BillContainer>
    </StyledBills>
  );
}

export default Bills;
