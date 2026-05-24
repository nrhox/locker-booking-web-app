import { create } from "zustand";
import { dummyAdmin, dummyAuthResponse, dummyUser } from "@/dummy/auth.dummy";
import type { User } from "@/types/auth";
import type { UserRole } from "@/types/common";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loginAs: (role: UserRole) => void;
  logout: () => void;
  deleteAccount: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: dummyUser,
  accessToken: dummyAuthResponse.data.tokens.accessToken,
  refreshToken: dummyAuthResponse.data.tokens.refreshToken,
  isAuthenticated: true,
  loginAs: (role) => {
    const user = role === "ADMIN" ? dummyAdmin : dummyUser;
    set({
      user,
      accessToken: dummyAuthResponse.data.tokens.accessToken,
      refreshToken: dummyAuthResponse.data.tokens.refreshToken,
      isAuthenticated: true,
    });
  },
  logout: () =>
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    }),
  deleteAccount: () =>
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    }),
}));
