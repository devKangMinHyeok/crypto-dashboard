import styled from "styled-components";

const TitleLayout = styled.h1`
  grid-column: 1 / span 2;
`;

function Title() {
  return <TitleLayout>Crypto Dashboard</TitleLayout>;
}

export default Title;
