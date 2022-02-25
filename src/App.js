import { useState } from "react";
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

function Layout() {
  const [isLight, setIsLight] = useState(true);
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
