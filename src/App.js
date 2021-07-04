import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      // We can pass min and max props to the counter component, by default it will remain 1 and 1000 respectively
      <Counter />
    </div>
  );
}

export default App;
