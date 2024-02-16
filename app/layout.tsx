import type { Metadata } from "next";
import {ToastContainer} from "react-toastify"
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import RecoilShell from "@/components/core/RecoilShell";
import AppShell from "@/components/core/AppShell";
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Stupid",
  description: "Study Club Perlajar Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RecoilShell>
          <AppShell>
            {children}
          </AppShell>
        </RecoilShell>
        <ToastContainer/>
      </body>
    </html>
  );
}
