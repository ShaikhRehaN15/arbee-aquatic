import { create } from 'zustand';

export const useActiveIndexStore = create((set) => ({
  activeIndex: 1,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
