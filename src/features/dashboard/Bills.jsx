import styled from 'styled-components';
import { HiOutlineCircleStack, HiOutlineCreditCard } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import formatCurrency from '../../utils/formatCurrency';

const StyledBills = styled.div`
  width: 100%;
  background-color: var(--color-gray-0);
  border: 2px solid var(--color-gray-100);
  border-radius: 15px;
  color: var(--color-gray-800);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  & svg {
    width: 7rem;
    height: 7rem;
    color: var(--color-primary-400);

    @media screen and (max-width: 360px) {
      width: 5rem;
      height: 5rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 850px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 5rem;
  }
`;

const BillContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const TotalExpenses = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 360px) {
    font-size: 2.5rem;
  }
`;

const ExpensesSpan = styled.span`
  font-size: 1.5rem;

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
  }
`;

function Bills() {
  const creditCardBill = useSelector(
    (state) => state.accounts.bills.creditCardBill
  );
  const loanBalance = useSelector((state) => state.accounts.bills.loans);

  return (
    <StyledBills>
      <BillContainer>
        <HiOutlineCreditCard />
        <TotalExpenses>
          <ExpensesSpan>Credit card bill</ExpensesSpan>{' '}
          {formatCurrency(creditCardBill)}
        </TotalExpenses>
      </BillContainer>

      <BillContainer>
        <HiOutlineCircleStack />
        <TotalExpenses>
          <ExpensesSpan>Loan balance</ExpensesSpan>{' '}
          {formatCurrency(loanBalance)}
        </TotalExpenses>
      </BillContainer>
    </StyledBills>
  );
}

export default Bills;
