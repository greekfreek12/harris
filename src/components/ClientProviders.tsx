"use client";

import { ComingSoonProvider } from "./ComingSoonAlert";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ComingSoonProvider>{children}</ComingSoonProvider>;
}
