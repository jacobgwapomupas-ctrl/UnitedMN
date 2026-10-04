import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { TicketCategoryId } from "./content";

export type TicketMessage = {
  id: string;
  author: "player" | "helper";
  name: string;
  body: string;
  at: number;
};

export type Ticket = {
  id: string;
  ign: string;
  category: TicketCategoryId;
  subject: string;
  status: "open" | "waiting" | "closed";
  createdAt: number;
  messages: TicketMessage[];
};

export type StaffApp = {
  id: string;
  ign: string;
  discord: string;
  age: string;
  timezone: string;
  role: string;
  why: string;
  experience: string;
  createdAt: number;
};

type TicketState = {
  hydrated: boolean;
  tickets: Ticket[];
  apps: StaffApp[];
  addTicket: (ticket: Ticket) => void;
  addMessage: (id: string, message: TicketMessage) => void;
  setStatus: (id: string, status: Ticket["status"]) => void;
  addApp: (app: StaffApp) => void;
  setHydrated: () => void;
};

export function uid() {
  return crypto.randomUUID();
}

const memoryStorage: Storage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};

export const useTicketStore = create<TicketState>()(
  persist(
    (set) => ({
      hydrated: false,
      tickets: [],
      apps: [],
      addTicket: (ticket) => set((s) => ({ tickets: [ticket, ...s.tickets] })),
      addMessage: (id, message) =>
        set((s) => ({
          tickets: s.tickets.map((t) =>
            t.id === id ? { ...t, messages: [...t.messages, message] } : t,
          ),
        })),
      setStatus: (id, status) =>
        set((s) => ({
          tickets: s.tickets.map((t) => (t.id === id ? { ...t, status } : t)),
        })),
      addApp: (app) => set((s) => ({ apps: [app, ...s.apps] })),
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "umn-tickets",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      skipHydration: true,
      partialize: (s) => ({ tickets: s.tickets, apps: s.apps }),
    },
  ),
);
