import { useState } from "react";

function Hello() {
  const [number, setNumber] = useState(0);
  let number2 = 0;
  const handleChange = (evt) => {
    setNumber(evt.target.value);
    number2++;
    console.log(number2);
  };
  return (
    <>
      <div>{number}</div>
      <div>{number2}</div>
      <input type="number" value={number} onChange={handleChange} />
    </>
  );
}

function Title() {
  return <div>Title</div>;
}

function App() {
  return (
    <>
      <Title />
      <Hello />
    </>
  );
}

export default App;
