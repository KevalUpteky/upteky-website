// app/landing/page.tsx

import LandingPage from "../ai-consultation/page";

// Optional: reuse the same metadata from ai-consultation
export { metadata } from "../ai-consultation/layout";

export default function Page() {
  return <LandingPage />;
}
