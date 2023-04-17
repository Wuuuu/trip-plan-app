import { Nunito } from "@next/font/google";
import ClinetOnly from "./compoments/ClientOnly";
import Navbar from "./compoments/navbar/Navbar";
import RegisterModal from "./compoments/modals/RegisterModal";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Trip Plan",
  description: "this is Trip Plan page",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClinetOnly>
        {children}
      </body>
    </html>
  );
}
