"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import { useTranslations } from "next-intl";
import SelectLang from "./SelectLang";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const t = useTranslations("UserMenu");

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value: boolean) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          {t("tripYourHome")}
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
        <SelectLang />
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label={t("myTrip")}
                  onClick={() => {
                    router.push("/trips");
                  }}
                />
                <MenuItem
                  label={t("myFavorites")}
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label={t("myReservations")}
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label={t("myProperties")}
                  onClick={() => router.push("/properties")}
                />
                <MenuItem
                  label={t("tripYourHome")}
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem
                  label={t("logout")}
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label={t("login")}
                  onClick={loginModal.onOpen}
                />
                <MenuItem
                  label={t("signUp")}
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
