import type { DateTimeUtc, OAuthProvider, PublicId, UserRole } from "./common";

export type OAuthIdentity = {
  provider: OAuthProvider;
  providerUserId: string;
};

export type User = {
  id: PublicId;
  role: UserRole;
  displayName: string;
  email: string;
  avatarUrl?: string | null;
  oauthProviders: OAuthIdentity[];
  createdAt: DateTimeUtc;
  updatedAt: DateTimeUtc;
};

export type TokenPair = {
  accessToken: string;
  refreshToken: string;
  tokenType: "Bearer";
  expiresIn: number;
};

export type AuthSession = {
  user: User;
  tokens: TokenPair;
};

export type LoginFormValues = {
  provider: OAuthProvider;
};
