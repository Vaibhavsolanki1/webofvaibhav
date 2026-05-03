import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAIBHAV.EXE — One person. Two worlds.",
  description: "A cinematic portfolio exploring the creator and the explorer.",
  openGraph: {
    title: "VAIBHAV.EXE — One person. Two worlds.",
    description: "A cinematic portfolio exploring the creator and the explorer.",
    type: "website",
  },
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
