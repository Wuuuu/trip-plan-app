"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
import { useTranslations } from "next-intl";

interface EmptyProps {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyProps> = ({
  title = "title",
  subTitle = "subTitle",
  showReset,
}) => {
  const t = useTranslations("EmptyPage");
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center gap-2">
      <Heading
        center
        title={t(title)}
        subtitle={t(subTitle)}
      />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label={t("clearFilters")}
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
