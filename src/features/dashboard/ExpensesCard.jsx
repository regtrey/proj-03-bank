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

function ExpensesCard() {
  return (
    <Card $type="expenses">
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <CardTitle>Total expenses</CardTitle>
        <Amount>$322.42</Amount>
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

export default ExpensesCard;
