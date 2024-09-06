import CatBox from "./components/CatBox";
import CatController from "./components/catController";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <CatBox />
        <CatController />
      </div>
    </div>
  );
}

export default App;
