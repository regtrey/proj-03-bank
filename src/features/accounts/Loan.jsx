import styled from 'styled-components';

import LoanBalance from './LoanBalance';
import LoanRequest from './LoanRequest';
import LoanPayment from './LoanPayment';

const StyledLoan = styled.div`
  height: max-content;
  display: flex;
  gap: 1.5rem;
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
