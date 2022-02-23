import { useEffect, useState } from "react";
import styled from "styled-components";

const DisplayBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
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
  if (info) console.log(info);
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

const TitleLayout = styled.h1`
  grid-column: 1 / span 2;
`;

function Title() {
  return <TitleLayout>Crypto Dashboard</TitleLayout>;
}

const TabsLayout = styled.div`
  border: 1px solid black;
`;

function Tabs() {
  return <TabsLayout>Tabs</TabsLayout>;
}

const DisplayLayout = styled.div`
  border: 1px solid black;
`;

function Display() {
  return (
    <DisplayLayout>
      <BtcInfo />
    </DisplayLayout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 1fr 9fr;
  gap: 1px;
`;

function App() {
  return (
    <Layout>
      <Title />
      <Tabs />
      <Display />
    </Layout>
  );
}

export default App;
