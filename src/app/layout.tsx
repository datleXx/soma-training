import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import VerticalSideBar from "./_components/dashboard/vertical-side-bar";
import Header from "./_components/home/header";

export const metadata: Metadata = {
  title: "Soma Capital",
  description: "Generated by XuanDatLe using t3",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="flex">
            <VerticalSideBar />
            <div className="flex-1">
              <Header />
              <main className="mt-[66px] ml-28">{children}</main>
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}