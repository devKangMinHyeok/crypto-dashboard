import { useEffect, useState } from "react";

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
  if (info) console.log(info);
  const handleClick = () => {
    setInfoLoading(true);
    setRefresh((prev) => !prev);
  };
  return (
    <>
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
    </>
  );
}

function App() {
  return <BtcInfo />;
}

export default App;
