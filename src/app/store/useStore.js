import { create } from "zustand";

export const useStore = create((set) => ({
  search: "",
  setSearch: (v) => set({ search: v, page: 1 }), // reset page saat search

  page: 1,
  setPage: (v) => set({ page: v }),

  totalPages: 1,
  setTotalPages: (v) => set({ totalPages: v }),

  filter: "",
  setFilter: (v) => set({ filter: v, page: 1 }), 

}));
