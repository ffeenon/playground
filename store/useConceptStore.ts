import { create } from "zustand";

interface ConceptStore {
  concept: string;
  setConcept: (concept: string) => void;
}
export default create<ConceptStore>((set) => ({
  concept: "",
  setConcept: (concept: string) => set(() => ({ concept })),
}));
