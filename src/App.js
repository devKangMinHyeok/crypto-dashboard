import { useState } from "react";

function BtcInfo() {
  const [counter, setCounter] = useState(0);
  fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data.quotes.USD.ath_price));

  const handleChange = (evt) => {
    setCounter(evt.target.value);
  };

  return (
    <>
      <div>{counter}</div>
      <input type="number" onChange={handleChange} />
    </>
  );
}

function App() {
  return <BtcInfo />;
}

export default App;
