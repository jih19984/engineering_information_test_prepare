import { SignUp } from "@clerk/nextjs";

import { authConfig, isClerkPublishableKeySet } from "@/shared/config/auth";
import { AuthSetupNotice } from "@/shared/ui/auth-setup-notice";
import { PageShell } from "@/shared/ui/page-shell";

export function SignUpPage() {
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
        <SignUp
          routing="path"
          path={authConfig.signUpUrl}
          signInUrl={authConfig.signInUrl}
          fallbackRedirectUrl={authConfig.afterAuthUrl}
        />
      </section>
    </PageShell>
  );
}
