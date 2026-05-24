import type { ApiResponse } from '@/types/api';
import type { AuthSession, User } from '@/types/auth';

export const dummyUser: User = {
  id: '2cc34a61-3398-46d4-87d5-f956b8c53221',
  role: 'USER',
  displayName: 'Campus User',
  email: 'user@example.edu',
  avatarUrl: null,
  oauthProviders: [{ provider: 'google', providerUserId: 'google-user-001' }],
  createdAt: '2026-05-24T01:00:00Z',
  updatedAt: '2026-05-24T01:00:00Z',
};

export const dummyAdmin: User = {
  ...dummyUser,
  id: '5f286ecb-8214-48be-a5f1-0e097f2fed9a',
  role: 'ADMIN',
  displayName: 'Admin Operator',
  email: 'admin@example.edu',
};

export const dummyAuthResponse: ApiResponse<AuthSession> = {
  message: 'Login successful',
  data: {
    user: dummyUser,
    tokens: {
      accessToken: 'dummy.jwt.access.token',
      refreshToken: 'dummy-refresh-token',
      tokenType: 'Bearer',
      expiresIn: 900,
    },
  },
};

