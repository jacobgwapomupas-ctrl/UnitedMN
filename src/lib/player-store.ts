import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Player = {
  ign: string;
  discord: string;
  ip: string;
  createdAt: number;
};

type PlayerState = {
  player: Player | null;
  login: (player: Player) => void;
  logout: () => void;
};

const memoryStorage: Storage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      player: null,
      login: (player) => set({ player }),
      logout: () => set({ player: null }),
    }),
    {
      name: "umn-player",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      skipHydration: true,
    },
  ),
);
