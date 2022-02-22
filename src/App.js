import { useEffect, useState } from "react";

function BtcInfo() {
  const [infoLoading, setInfoLoading] = useState(true);
  const [info, setInfo] = useState();
  useEffect(async () => {
    const response = await fetch(
      "https://api.coinpaprika.com/v1/tickers/btc-bitcoin"
    );
    const data = await response.json();
    setInfo(data);
    setInfoLoading(false);
  }, []);
  return (
    <>
      <div>{infoLoading ? "Loading" : info.quotes.USD.ath_price}</div>
    </>
  );
}

function App() {
  return <BtcInfo />;
}

export default App;
