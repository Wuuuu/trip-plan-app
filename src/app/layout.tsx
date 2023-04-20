import { Nunito } from "@next/font/google";
import ClinetOnly from "./compoments/ClientOnly";
import Navbar from "./compoments/navbar/Navbar";
import RegisterModal from "./compoments/modals/RegisterModal";
import LoginModal from "./compoments/modals/LoginModal";
import RentModal from "./compoments/modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

import "./globals.css";

export const metadata = {
  title: "Trip Plan",
  description: "this is Trip Plan page",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClinetOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
