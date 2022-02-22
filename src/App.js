import { useEffect, useState } from "react";
import styles from "./styles.module.css";

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

function Title() {
  return <h1 className={styles.title}>Crypto Dashboard</h1>;
}

function Tabs() {
  return <div className="tabs">Tabs</div>;
}

function Display() {
  return <div className="display">Display</div>;
}

function App() {
  return (
    <div className={styles.layout}>
      <Title />
      <Tabs />
      <Display />
    </div>
  );
}

export default App;
