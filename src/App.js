import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Tabs from "./components/Tabs";
import Title from "./components/Title";
import { darkTheme, lightTheme } from "./theme";

const LayoutBox = styled.div`
  display: grid;
  height: 90vh;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 1fr 9fr;
  gap: 1px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};
`;

const DisplayLayout = styled.div`
  background-color: ${({ theme }) => theme.displayBgColor};
`;

const waitApiRemain = (response) => {
  const remainString = response.headers.get("remaining-req");

  // let words = remainString.split(";");
  // words = words.map((word) => word.trim());
  // const min = words[1].split("=");
  // const sec = words[2].split("=");
  // const remainMin = Number(min[1]);
  // const remainSec = Number(sec[1]);
  return remainString;
};

function Layout() {
  const [isLight, setIsLight] = useState(true);
  const [marketCodes, setMarketCodes] = useState();

  useEffect(async () => {
    const response = await fetch(
      "https://api.upbit.com/v1/market/all?isDetails=false"
    );
    const data = await response.json();
    setMarketCodes(data);
  }, []);

  useEffect(async () => {
    if (marketCodes) {
      for (let i = 0; i < marketCodes.length; i++) {
        const response = await fetch(
          `/v1/ticker?markets=${marketCodes[i].market}`
        );
        console.log(response.headers.get("remaining-req"));

        const data = await response.json();
        console.log(data);
      }
    }
  }, [marketCodes]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <LayoutBox>
          <Title />
          <Tabs isLight={isLight} setIsLight={setIsLight} />
          <DisplayLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </DisplayLayout>
        </LayoutBox>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function App() {
  return <Layout />;
}

export default App;
