import type { ApiResponse } from "@/types/api";
import type { AuthSession, User } from "@/types/auth";
import type { UserRole } from "@/types/common";

export const dummyUser: User = {
  id: "2cc34a61-3398-46d4-87d5-f956b8c53221",
  role: "USER",
  displayName: "Campus User",
  email: "user@example.edu",
  avatarUrl: null,
  oauthProviders: [{ provider: "google", providerUserId: "google-user-001" }],
  createdAt: "2026-05-24T01:00:00Z",
  updatedAt: "2026-05-24T01:00:00Z",
};

export const dummyAdmin: User = {
  ...dummyUser,
  id: "5f286ecb-8214-48be-a5f1-0e097f2fed9a",
  role: "ADMIN",
  displayName: "Admin Operator",
  email: "admin@example.edu",
};

export const dummyUser1: User = {
  id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
  role: "USER",
  displayName: "Dr. Prof. Budi Utomo",
  email: "budi.utomo@academic.edu",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
  oauthProviders: [{ provider: "google", providerUserId: "google-budi-123" }],
  createdAt: "2026-03-15T08:00:00Z",
  updatedAt: "2026-05-22T09:15:00Z",
};

export const dummyUser2: User = {
  id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  role: "USER",
  displayName: "Siti Rahmawati",
  email: "siti.rahma@student.edu",
  avatarUrl: null,
  oauthProviders: [
    { provider: "github", providerUserId: "github-siti-99" },
    { provider: "google", providerUserId: "google-siti-456" },
  ],
  createdAt: "2026-05-25T02:10:00Z",
  updatedAt: "2026-05-25T02:10:00Z",
};

export const dummyUsersList: User[] = [
  dummyAdmin,
  dummyUser1,
  dummyUser2,
  {
    id: "3dd45b72-4409-57e5-98e6-a067c9d64332",
    role: "USER",
    displayName: "Alex John",
    email: "alex.john@example.edu",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    oauthProviders: [{ provider: "github", providerUserId: "gh-alex-002" }],
    createdAt: "2026-05-24T15:45:00Z",
    updatedAt: "2026-05-25T06:20:00Z",
  },
];

export const dummyAuthResponse: ApiResponse<AuthSession> = {
  message: "Login successful",
  data: {
    user: dummyUser,
    tokens: {
      accessToken: "dummy.jwt.access.token",
      refreshToken: "dummy-refresh-token",
      tokenType: "Bearer",
      expiresIn: 900,
    },
  },
};

export const dummyUserRolesList: { label: string; value: UserRole }[] = [
  { label: "Admin", value: "ADMIN" },
  { label: "User", value: "USER" },
];
