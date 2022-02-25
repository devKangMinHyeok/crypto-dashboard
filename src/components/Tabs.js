import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";
import styled, { ThemeContext } from "styled-components";

const TabsLayout = styled.div`
  background-color: ${({ theme }) => theme.tabBgColor};
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

function Tabs({ isLight, setIsLight }) {
  const theme = useContext(ThemeContext);
  const setTabStyle = ({ isActive }) => {
    return {
      color: isActive ? theme.hightLightColor : theme.inActiveColor,
      background: isActive ? theme.activeTabColor : theme.tabBgColor,
    };
  };
  const changeTheme = () => {
    setIsLight((prev) => !prev);
  };
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
      <ReactSwitch checked={!isLight} onChange={changeTheme} />
    </TabsLayout>
  );
}

export default Tabs;
