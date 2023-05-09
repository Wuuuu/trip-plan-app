import { Nunito } from "@next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import ClinetOnly from "./compoments/ClientOnly";
import Navbar from "./compoments/navbar/Navbar";
import RegisterModal from "./compoments/modals/RegisterModal";
import LoginModal from "./compoments/modals/LoginModal";
import RentModal from "./compoments/modals/RentModal";
import SearchModal from "./compoments/modals/SearchModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "../actions/getCurrentUser";

import "./globals.css";

export const metadata = {
  title: "Trip Plan",
  description: "this is Trip Plan page",
};

const font = Nunito({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const currentUser = await getCurrentUser();

  return (
    <html lang={locale}>
      <body className={font.className}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ClinetOnly>
            <ToasterProvider />
            <SearchModal />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Navbar currentUser={currentUser} />
          </ClinetOnly>
          <div className="pb-20 pt-28">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
