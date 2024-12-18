import type { Metadata } from "next";
import "./globals.css";
import AppWalletProvider from "@/component/WalletConnect";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      ><AppWalletProvider>
          {children}
      </AppWalletProvider>
      </body>
    </html>
  );
}
