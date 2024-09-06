import { shallow } from "zustand/shallow";
import { useCatStore } from "../stores/catStore";





const CatController = () => {
    // const { increaseBigCats, increaseSmallCats } = useCatStore();

    // const increaseBigCats = useCatStore.use.increaseBigCats();
    // const increaseSmallCats = useCatStore.use.increaseSmallCats();

    const { increaseBigCats, increaseSmallCats } = useCatStore(
        (state)  => ({
            increaseBigCats: state.increaseBigCats,
            increaseSmallCats: state.increaseSmallCats,
        }),
        shallow
    );


    return ( 
        <div className="box">
            <h1>Cat Controller</h1>
            <p>{Math.random()}</p>
            <div>
                <button onClick={increaseSmallCats}>add small cats</button>
                <button onClick={increaseBigCats}>add big cats</button>
            </div>
        </div>
     );
}
 
export default CatController;