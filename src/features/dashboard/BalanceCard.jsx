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

function BalanceCard({ variant }) {
  const cardBalance = useSelector((state) => state.accounts.balance);
  const creditBalance = useSelector((state) => state.accounts.creditBalance);
  const username = useSelector((state) => state.user.name);
  const debitCardNumber = useSelector(
    (state) => state.user.cardDetails.debit.cardNumber
  );
  const debitCardExpiry = useSelector(
    (state) => state.user.cardDetails.debit.cardExpiry
  );
  const creditCardNumber = useSelector(
    (state) => state.user.cardDetails.credit.cardNumber
  );
  const creditCardExpiry = useSelector(
    (state) => state.user.cardDetails.credit.cardExpiry
  );

  return (
    <Card $type={variant}>
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>
          {variant === 'debit' ? 'Balance' : 'Credit Card Balance'}
        </CardTitle>
        <Amount>
          {variant === 'debit'
            ? formatCurrency(cardBalance)
            : formatCurrency(creditBalance)}
        </Amount>
      </BalanceDetails>

      <CardDetails>
        <CardNum>
          {variant === 'debit' ? debitCardNumber : creditCardNumber}
        </CardNum>
        <CardName>
          {username}{' '}
          <span>
            {variant === 'debit' ? debitCardExpiry : creditCardExpiry}
          </span>
        </CardName>
      </CardDetails>
    </Card>
  );
}

export default BalanceCard;
