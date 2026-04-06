export const authConfig = {
  signInUrl: "/sign-in",
  signUpUrl: "/sign-up",
  afterAuthUrl: "/problems",
} as const;

export const isClerkPublishableKeySet = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
);

export const isClerkFullyConfigured = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
);
