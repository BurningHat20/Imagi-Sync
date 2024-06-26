import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CrispProvider } from "@/components/crisp-provider";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";

import "./globals.css";
import "./globals2.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imagi-Sync",
  description:
    "Imagi-Sync is an Ai platform for creating adaptable content.It combines conversation, image, video, music, and code generation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
