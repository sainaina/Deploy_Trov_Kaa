import React from "react";
import { useTranslation } from "react-i18next";

const Line = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center items-center pb-20">
        <div className="mt-10 px-4 py-4 text-xl text-center sm:text-2xl font-semibold dark:text-Action text-Secondary border border-Secondary rounded-lg w-full max-w-xs sm:max-w-md lg:max-w-lg transform transition-transform hover:scale-110">
          {t('Our_Category')}
        </div>
      </div>
    </div>
  );
};

export default Line;
