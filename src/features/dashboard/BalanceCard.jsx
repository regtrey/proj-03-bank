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

function BalanceCard() {
  return (
    <Card $type="balance">
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>Balance</CardTitle>
        <Amount>$4,537.24</Amount>
      </BalanceDetails>

      <CardDetails>
        <CardNum>4012 8888 8888 1881</CardNum>
        <CardName>
          Naomi Osaka <span>05/27</span>
        </CardName>
      </CardDetails>
    </Card>
  );
}

export default BalanceCard;
