import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createSelectors } from "../utils/createSelectors"
import { devtools, persist } from "zustand/middleware"

type TCatStoreState = {
    cats: {
        bigCats: number,
        smallCats: number,
    }
    increaseBigCats: ()=> void,
    increaseSmallCats: ()=> void,
    removeAllCats: ()=> void,
    totalCats: ()=> void,
}

export const useCatStore = createSelectors(create<TCatStoreState>()
(immer
    (devtools(
        persist((set, get) => ({
            cats: {
                bigCats: 0,
                smallCats: 0,
            },
            increaseBigCats: () =>{set((state) => {
                state.cats.bigCats ++;
            })},
            increaseSmallCats: () =>{set((state) => {
                state.cats.smallCats ++;
            })},
            totalCats: () => {
                const totalCats = get().cats.bigCats + get().cats.smallCats;
                return `There are ${totalCats} cats in total`
            },
            removeAllCats: () => {set((state) => {
                state.cats.smallCats = 0;
                state.cats.bigCats = 0;
            })}
            }), {
                name: "cat store",
            }
        ),
    {
        enabled: true,
        name: "cat store"
    }
    ))
));