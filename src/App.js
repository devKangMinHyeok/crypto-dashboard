import { useState } from "react";

function Hello() {
  const [number, setNumber] = useState(0);
  const handleChange = (evt) => {
    setNumber(evt.target.value);
  };
  return (
    <>
      <div>{number}</div>
      <input type="number" value={number} onChange={handleChange} />
    </>
  );
}

function App() {
  return (
    <>
      <Hello />
    </>
  );
}

export default App;
