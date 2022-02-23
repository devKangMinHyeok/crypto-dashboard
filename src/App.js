import { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
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

const TabBox = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }
`;

const setTabStyle = ({ isActive }) => {
  return {
    color: isActive ? "red" : "grey",
    background: isActive ? "lightgray" : "white",
  };
};

function Tabs() {
  return (
    <TabsLayout>
      <TabBox>
        <NavLink to="/" style={setTabStyle}>
          Home
        </NavLink>
      </TabBox>
      <TabBox>
        <NavLink to="/detail" style={setTabStyle}>
          Detail
        </NavLink>
      </TabBox>
    </TabsLayout>
  );
}

function Home() {
  return <BtcInfo />;
}

function Detail() {
  return <div>Detail</div>;
}

const LayoutBox = styled.div`
  display: grid;
  height: 90vh;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 1fr 9fr;
  gap: 1px;
`;

const DisplayLayout = styled.div`
  border: 1px solid black;
`;

function Layout() {
  return (
    <LayoutBox>
      <Title />
      <Tabs />
      <DisplayLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </DisplayLayout>
    </LayoutBox>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
