import { useSelector } from 'react-redux';
import formatCurrency from '../../../utils/formatCurrency';

import {
  Card,
  Amount,
  BalanceDetails,
  CardDetails,
  CardLogo,
  CardName,
  CardNum,
  CardTitle,
} from '../../../ui/Card';

function LoanBalance() {
  const loans = useSelector((state) => state.accounts.bills.loans);
  const username = useSelector((state) => state.user.name);
  const cardNumber = useSelector(
    (state) => state.user.cardDetails.credit.cardNumber
  );
  const cardExpiry = useSelector(
    (state) => state.user.cardDetails.credit.cardExpiry
  );

  return (
    <Card $type="loanBalance">
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>Loan Balance</CardTitle>
        <Amount>{formatCurrency(loans)}</Amount>
      </BalanceDetails>

      <CardDetails>
        <CardNum>{cardNumber}</CardNum>
        <CardName>
          {username} <span>{cardExpiry}</span>
        </CardName>
      </CardDetails>
    </Card>
  );
}

export default LoanBalance;
