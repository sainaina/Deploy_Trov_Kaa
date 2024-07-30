import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import ProfileSetting from "../../components/user-component/ProfileSetting";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const UserSetting = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="flex flex-col rounded-2xl bg-neutral-100 dark:bg-gray-900">
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 text-base tracking-wide leading-6 text-neutral-500 max-md:mt-6">
                <div className="flex gap-5 justify-between items-start pt-8 pb-14 pl-8 w-[250px] bg-white dark:bg-gray-800 rounded-tr-lg max-md:pl-5">
                  <div className="flex flex-col mt-2">
                    <div className="flex flex-col mt-2">
                      <div
                        className="flex gap-4 -mt-2 whitespace-nowrap p-2 rounded-lg hover:bg-Primary hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 dark:hover:bg-gray-600 dark:hover:text-gray-200 dark:text-gray-300  hover:text-white hover:shadow-lg"
                        onClick={() => handleButtonClick("/dashboard-user")}
                      >
                        <AiOutlineDashboard className="shrink-0 w-6 aspect-square text-[25px]" />
                        <div>{t("Dashboard")}</div>
                      </div>

                      <div
                        className="flex gap-4 mt-3 font-semibold whitespace-nowrap bg-Primary dark:hover:text-gray-100 dark:text-gray-300 dark:bg-gray-600 text-white p-2 hover:cursor-pointer rounded-lg"
                        onClick={() => handleButtonClick("/user-setting")}
                      >
                        <IoSettingsOutline className="shrink-0 w-6 aspect-square text-[25px]" />
                        <div>{t("Profile_Setting")}</div>
                      </div>

                      <div
                        className="flex gap-4 mt-3 p-2 whitespace-nowrap hover:bg-Primary text-neutral-500 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 dark:hover:bg-gray-600 dark:hover:text-gray-200 dark:text-gray-300  hover:text-white hover:shadow-lg"
                        onClick={() => handleButtonClick("/user-favorite")}
                      >
                        <GrFavorite className="shrink-0 w-6 aspect-square text-[25px]" />
                        <div>{t("Favorite")}</div>
                      </div>

                      <div
                        className="flex gap-4 mt-3 whitespace-nowrap p-2 hover:bg-Primary rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 dark:hover:bg-gray-600 dark:hover:text-gray-200 dark:text-gray-300 hover:text-white hover:shadow-lg"
                        onClick={() => handleButtonClick("/user-review")}
                      >
                        <VscPreview className="shrink-0 w-6 aspect-square text-[25px]" />
                        <div>{t("Reviews")}</div>
                      </div>

                      <div
                        className="flex gap-4 mt-3 p-2 rounded-lg hover:bg-Primary hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 dark:hover:bg-gray-600 dark:hover:text-gray-200 dark:text-gray-300  hover:text-white hover:shadow-lg"
                        onClick={() => handleButtonClick("/user-password")}
                      >
                        <RiLockPasswordLine className="shrink-0 w-6 aspect-square text-[25px]" />
                        <div>{t("Change_Pw")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 bg-white dark:bg-gray-800 rounded-none h-[237px] w-[250px]" />
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4 self-start whitespace-nowrap max-md:flex-wrap"></div>

                <div className="flex flex-col items-center px-16 dark:bg-gray-800 pb-9 bg-white rounded-2xl mr-[20px] max-md:px-5 max-md:max-w-full">
                  <div className="-mt-3">
                    <ProfileSetting />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
