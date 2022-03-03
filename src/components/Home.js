import { useEffect, useState } from "react";
import styled from "styled-components";

const DisplayBox = styled.div`
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.boxBgColor};
`;

function BtcInfo() {
  const [infoLoading, setInfoLoading] = useState(true);
  const [info, setInfo] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(async () => {
    const response = await fetch(
      "https://api.coinpaprika.com/v1/tickers/btc-bitcoin"
    );
    const data = await response.json();
    setInfo(data);
    setInfoLoading(false);
  }, [refresh]);

  const handleClick = () => {
    setInfoLoading(true);
    setRefresh((prev) => !prev);
  };
  return (
    <DisplayBox>
      {infoLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div>역대최고가</div>
          <div>{info.quotes.USD.ath_price}</div>
          <div>시가총액</div>
          <div>{info.quotes.USD.market_cap}</div>
          <div>시가총액 변화율</div>
          <div>{info.quotes.USD.market_cap_change_24h}</div>
        </div>
      )}
      <button onClick={handleClick}>Refresh</button>
    </DisplayBox>
  );
}

function Home() {
  return <BtcInfo />;
}

export default Home;
