import { useCatStore } from "../stores/catStore";

const CatBox = () => {
    const { cats, increaseBigCats, increaseSmallCats, removeAllCats, totalCats } = useCatStore();
    // const totalCats = useCatStore((state) => state.totalCats);
    console.log(totalCats())
    return ( 
        <div className="box">
            <h1>Cat Box</h1>
            <p>big cats {cats.bigCats}</p>
            <p>small cats {cats.smallCats}</p>
            <div className="">
                <button onClick={increaseBigCats}>add big cats</button>
                <button onClick={increaseSmallCats}>add small cats</button>
                <button onClick={removeAllCats}>remove all cats</button>
            </div>
        </div>
     );
}
 
export default CatBox;