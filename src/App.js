function Hello({ color }) {
  return <div style={(color = { color })}>Hello</div>;
}

function App() {
  return (
    <>
      <Hello color="red" />
      <Hello color="blue" />
    </>
  );
}

export default App;
