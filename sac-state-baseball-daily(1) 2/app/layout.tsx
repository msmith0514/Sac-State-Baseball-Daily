import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Sac State Baseball Daily", template: "%s | Sac State Baseball Daily" },
  description: "Independent daily coverage concept tracking Sacramento State baseball players from campus to the pros.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Sac State Baseball Daily", description: "Following the Hornets from Sacramento to the Pros", type: "website" },
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
