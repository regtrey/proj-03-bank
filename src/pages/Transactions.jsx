import styled from 'styled-components';
import { Heading } from '../ui/Heading';

const StyledTransactions = styled.div`
  height: 100%;
  padding: 3rem;
`;

const TransactionsList = styled.ul`
  height: max-content;
  margin-top: 1.5rem;
  border: 1px solid var(--color-gray-200);
  border-radius: 10px;

  &:first-child {
    border-top: none;
  }
`;

const Transaction = styled.li`
  height: 10rem;
  border-bottom: 1px solid var(--color-gray-200);
  border-radius: 8px;
  color: var(--color-gray-800);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    border-bottom: none;
  }
`;

const TransactionDetails = styled.h2`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  & span {
    font-size: 1rem;
    color: var(--color-gray-500);
  }
`;

const TransactionAmount = styled.h3`
  font-size: 2.5rem;

  color: ${(props) => props.$gain && '#29a429'};
`;

function Transactions() {
  return (
    <StyledTransactions>
      <Heading>Transactions</Heading>
      <TransactionsList>
        <Transaction>
          <TransactionDetails>
            Deposit <span>Feb 10, 2024 5:30 PM</span>
          </TransactionDetails>
          <TransactionAmount $gain>$100.00</TransactionAmount>
        </Transaction>
        <Transaction>
          <TransactionDetails>
            Withdraw <span>Feb 09, 2024 2:18 PM</span>
          </TransactionDetails>
          <TransactionAmount>- $165.00</TransactionAmount>
        </Transaction>
        <Transaction>
          <TransactionDetails>
            Deposit <span>Feb 05, 2024 11:03 AM</span>
          </TransactionDetails>
          <TransactionAmount $gain>$480.00</TransactionAmount>
        </Transaction>
        <Transaction>
          <TransactionDetails>
            Withdraw <span>Feb 02, 2024 3:12 PM</span>
          </TransactionDetails>
          <TransactionAmount>- $35.00</TransactionAmount>
        </Transaction>
      </TransactionsList>
    </StyledTransactions>
  );
}

export default Transactions;
