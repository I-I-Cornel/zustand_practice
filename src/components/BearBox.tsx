import { useBearStore } from "../stores/bearStore";

const BearBox = () => {
  // const bears = useBearStore(state => state.bears);
  // const increasePopulation = useBearStore(state => state.increasePopulation)
  // const removeAllBears = useBearStore(state => state.removeAllBears)
  const { bears, increasePopulation, removeAllBears } = useBearStore();


  return ( 
    <div className="box">
      <h1>Bear Box</h1>
      <p>bears {bears}</p>
      <button onClick={increasePopulation}>add bears</button>
      <button onClick={removeAllBears}>remove all bears</button>
    </div>
   );
}
 
export default BearBox;