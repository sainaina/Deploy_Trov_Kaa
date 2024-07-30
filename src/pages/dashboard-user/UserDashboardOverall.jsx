import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UserDashboardOverall = () => {
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
                    <div className="flex gap-4 whitespace-nowrap font-semibold bg-Primary dark:hover:text-gray-100 dark:text-gray-300 dark:bg-gray-600 text-white p-2 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                      onClick={() => handleButtonClick('/dashboard-user')}>
                      <AiOutlineDashboard
                        className="shrink-0 w-6 aspect-square text-[25px]"
                      />
                      <div >{t('Dashboard')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 p-2 text-neutral-500 hover:bg-Primary dark:hover:bg-gray-600 dark:hover:text-gray-00 dark:text-gray-300 hover:text-white rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                      onClick={() => handleButtonClick('/user-setting')}
                    >
                      <IoSettingsOutline
                        className="shrink-0 w-6 aspect-square text-[25px]"

                      />
                      <div >{t('Profile_Setting')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 whitespace-nowrap text-neutral-500 dark:text-gray-300 hover:bg-Primary dark:hover:bg-gray-600 hover:text-white p-2 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                      onClick={() => handleButtonClick('/user-favorite')}
                    >
                      <GrFavorite
                        className="shrink-0 w-6 aspect-square text-[25px]"
                      />
                      <div>{t('Favorite')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 whitespace-nowrap hover:bg-Primary dark:hover:bg-gray-600 dark:text-gray-300 hover:text-white p-2 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                      onClick={() => handleButtonClick('/user-review')}
                    >
                      <VscPreview
                        className="shrink-0 w-6 aspect-square text-[25px]"
                      />
                      <div>{t('Reviews')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 hover:bg-Primary dark:hover:bg-gray-600 dark:text-gray-300 hover:text-white p-2 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                      onClick={() => handleButtonClick('/user-password')}
                    >
                      <RiLockPasswordLine
                        className="shrink-0 w-6 aspect-square text-[25px]"
                      />
                      <div >
                      {t('Change_Pw')}
                      </div>
                    </div>
                  </div>

                </div>
                <div className="shrink-0 bg-white dark:bg-gray-800 rounded-none h-[237px] w-[250px]" />
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4 self-start whitespace-nowrap max-md:flex-wrap">

                  <div className="flex flex-auto gap-5 justify-between px-8 py-6 bg-[#4787ff] rounded-lg border border-solid border-slate-100 max-md:pr-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col">
                      <div className="text-sm leading-4 text-white">{t('Reviews')}</div>
                      <div className="mt-5 text-xl font-bold leading-6 text-white">14</div>
                    </div>
                    <VscPreview className="shrink-0 w-16 aspect-square text-[50px] text-white" />
                  </div>

                  <div className="flex flex-auto gap-5 justify-between py-6 pr-12 pl-5 bg-[#813ffb] rounded-lg border border-solid border-slate-100 max-md:px-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col self-start">
                      <div className="text-sm leading-4 text-white">
                      {t('Favorite')}
                      </div>

                      <div className="mt-5 text-xl font-bold leading-6 text-white">
                        4
                      </div>
                    </div>
                    <GrFavorite className='shrink-0 w-16 aspect-square text-[50px] text-white' />
                  </div>

                </div>

                <div className="flex flex-col items-center px-16 pt-20 pb-9 mt-6 bg-white rounded-2xl border border-solid border-slate-100 max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-2 mt-28 max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-col self-start text-xs text-right text-black whitespace-nowrap">

                    </div>
                    <div className="flex flex-auto gap-0 max-md:flex-wrap">
                      <div className="flex flex-col items-center self-start">

                      </div>
                      <div className="flex flex-col grow shrink-0 text-xs text-center text-black whitespace-nowrap basis-0 w-fit max-md:max-w-full">

                        <div className="flex gap-5 justify-between self-center mt-6 max-w-full w-[410px]">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboardOverall;





