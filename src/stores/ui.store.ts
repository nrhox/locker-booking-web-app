import { create } from 'zustand';

type UiState = {
  adminDrawerOpen: boolean;
  activeModal: string | null;
  openAdminDrawer: () => void;
  closeAdminDrawer: () => void;
  openModal: (key: string) => void;
  closeModal: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  adminDrawerOpen: false,
  activeModal: null,
  openAdminDrawer: () => set({ adminDrawerOpen: true }),
  closeAdminDrawer: () => set({ adminDrawerOpen: false }),
  openModal: (key) => set({ activeModal: key }),
  closeModal: () => set({ activeModal: null }),
}));

