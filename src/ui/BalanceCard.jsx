import styled from 'styled-components';

const StyledBalanceCard = styled.div`
  width: 100%;
  background-color: var(--color-gradient-bg);
  background-image: var(--color-gradient-mesh);
  color: var(--color-gray-0);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2.5rem;
  position: relative;
`;

const CardLogo = styled.img`
  height: 2rem;
  width: 6rem;
  display: block;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const BalanceDetails = styled.div`
  line-height: 1.2;
`;

const BalanceSpan = styled.span`
  display: block;
  font-size: 1.2rem;
`;

const CardBalance = styled.h1`
  font-size: 5rem;
`;

const CardDetails = styled.div`
  width: max-content;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const CardNum = styled.span`
  font-family: 'Space Mono', monospace;
`;

const CardName = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

function BalanceCard() {
  return (
    <StyledBalanceCard>
      <CardLogo src="visa-logo.png" alt="Visa logo" />
      <BalanceDetails>
        <BalanceSpan>Balance</BalanceSpan>
        <CardBalance>$4,537.24</CardBalance>
      </BalanceDetails>

      <CardDetails>
        <CardNum>4012 8888 8888 1881</CardNum>
        <CardName>
          Naomi Osaka <span>05/27</span>
        </CardName>
      </CardDetails>
    </StyledBalanceCard>
  );
}

export default BalanceCard;
