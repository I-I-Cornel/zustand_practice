import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type TBearStoreState = {
  bears: number,
  increasePopulation: () => void,
  removeAllBears: () => void,
}

export const useBearStore = create<TBearStoreState>()(devtools(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }), {
      name: 'bear store',
    }), {
      enabled: true,
      name: "bear store",
  }))