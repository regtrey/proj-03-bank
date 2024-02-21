import styled from 'styled-components';
import { Heading } from '../../ui/Heading';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';

const StyledStatsChart = styled.div`
  /* background-color: var(--color-gray-50); */
  border: 2px solid var(--color-gray-100);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  grid-column: 1 / -1;
  grid-row: 3 / -1;

  @media screen and (max-width: 768px) {
    height: max-content;
  }
`;

const StatsChartHeading = styled(Heading)`
  font-size: 2.2rem;
`;

function StatsChart() {
  const transactions = useSelector((state) => state.accounts.transactions);
  const updatedTransactions = !transactions
    ? []
    : transactions.map((transaction) =>
        Object.assign({}, transaction, { date: transaction.date.slice(0, 6) })
      );

  return (
    <StyledStatsChart>
      <StatsChartHeading>Transactions Chart</StatsChartHeading>

      <ResponsiveContainer height={200} width="100%">
        <LineChart height={200} width="100%" data={updatedTransactions}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="deposit" stroke="#ff8800" unit="$" />
          <Line type="monotone" dataKey="withdraw" stroke="#46bad4" unit="$" />
          <Line type="monotone" dataKey="loan" stroke="#ff0080" unit="$" />
          <Line type="monotone" dataKey="payments" stroke="#7300ff" unit="$" />
        </LineChart>
      </ResponsiveContainer>
    </StyledStatsChart>
  );
}

export default StatsChart;
