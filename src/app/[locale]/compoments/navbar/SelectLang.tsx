"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

import { HiLanguage } from "react-icons/hi2";
import MenuItem from "./MenuItem";

import { useLocale } from "next-intl";

const SelectLang = ({}) => {
  const local = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value: boolean) => !value);
  }, []);

  return (
    <>
      <div className="flex flex-row items-center gap-3">
        <div
          className="p-6 md:py-1 md:px-2 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <HiLanguage />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-2/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                label="🇨🇳 简体中文"
                onClick={() => {
                  if (local === "zh") return;
                  router.push(`/zh${pathname}`);
                }}
              />
              <MenuItem
                label={"🇺🇸 English"}
                onClick={() => {
                  if (local === "en") return;
                  const str = pathname || "";
                  router.push(`${str.replace(local, "en")}`);
                }}
              />
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectLang;
