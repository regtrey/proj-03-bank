import styled from 'styled-components';

import LoanBalance from './LoanBalance';
import LoanRequest from './LoanRequest';
import LoanPayment from './LoanPayment';

const StyledLoan = styled.div`
  height: max-content;
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Loan() {
  return (
    <StyledLoan>
      <LoanBalance />
      <LoanRequest />
      <LoanPayment />
    </StyledLoan>
  );
}

export default Loan;
