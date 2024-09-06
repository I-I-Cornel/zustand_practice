import BearBox from "./components/BearBox";
import CatBox from "./components/CatBox";
import CatController from "./components/catController";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <CatBox />
        <CatController />
      </div>
    </div>
  );
}

export default App;
