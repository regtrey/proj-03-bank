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
  return (
    <Card $type="acctBalance">
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>Balance</CardTitle>
        <Amount>$4,537.24</Amount>
      </BalanceDetails>

      <CardDetails>
        <CardNum>4012 2368 8918 1537</CardNum>
        <CardName>
          Naomi Osaka <span>05/27</span>
        </CardName>
      </CardDetails>
    </Card>
  );
}

export default AccountBalance;
