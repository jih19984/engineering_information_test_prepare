import { SignIn } from "@clerk/nextjs";

import { authConfig, isClerkPublishableKeySet } from "@/shared/config/auth";
import { AuthSetupNotice } from "@/shared/ui/auth-setup-notice";
import { PageShell } from "@/shared/ui/page-shell";

export function SignInPage() {
  if (!isClerkPublishableKeySet) {
    return (
      <PageShell>
        <AuthSetupNotice />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="flex flex-1 items-center justify-center py-6">
        <SignIn
          routing="path"
          path={authConfig.signInUrl}
          signUpUrl={authConfig.signUpUrl}
          fallbackRedirectUrl={authConfig.afterAuthUrl}
        />
      </section>
    </PageShell>
  );
}
