import { useSelector } from 'react-redux';
import formatCurrency from '../../utils/formatCurrency';

import {
  Card,
  Amount,
  BalanceDetails,
  CardDetails,
  CardLogo,
  CardName,
  CardNum,
  CardTitle,
} from '../../ui/Card';

function CreditBalance() {
  const creditCardBalance = useSelector(
    (state) => state.accounts.creditBalance
  );
  const creditCardBill = useSelector(
    (state) => state.accounts.bills.creditCardBill
  );
  const username = useSelector((state) => state.user.name);
  const cardNumber = useSelector(
    (state) => state.user.cardDetails.credit.cardNumber
  );
  const cardExpiry = useSelector(
    (state) => state.user.cardDetails.credit.cardExpiry
  );

  return (
    <Card $type="creditBalance">
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>Credit Card Bill</CardTitle>
        <Amount>{formatCurrency(creditCardBill)}</Amount>
      </BalanceDetails>
      <BalanceDetails>
        <CardTitle>Credit Balance</CardTitle>
        <Amount>{formatCurrency(creditCardBalance)}</Amount>
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

export default CreditBalance;
