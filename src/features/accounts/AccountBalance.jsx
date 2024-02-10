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

function AccountBalance() {
  const cardBalance = useSelector((state) => state.accounts.balance);
  const username = useSelector((state) => state.user.name);
  const cardNumber = useSelector((state) => state.user.cardDetails.cardNumber);
  const cardExpiry = useSelector((state) => state.user.cardDetails.cardExpiry);

  return (
    <Card $type="acctBalance">
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>Balance</CardTitle>
        <Amount>{formatCurrency(cardBalance)}</Amount>
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

export default AccountBalance;
