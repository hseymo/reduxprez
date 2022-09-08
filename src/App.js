import Counter from "./features/counter/Counter";
import Color from "./features/color/Color";
import Name from "./features/name/Name";

function App() {
  return (
    <div className="App">
      <header>
        <h1>I'm the App Component</h1>
      </header>
      <main>
        <Counter />
        <Color />
        <Name />
      </main>
      <footer>
        <h3>Still App Here</h3>
      </footer>
    </div>
  );
}

export default App;
