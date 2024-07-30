import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { RiCustomerService2Line } from "react-icons/ri";
import ProviderProfileSetting from '../../components/provider-components/ProviderProfileSetting';
import { Metadata } from "../../lib/Metadata";
import { useTranslation } from 'react-i18next';


const ProviderSettingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div>
        <Metadata
          title="Provide Setting | TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="./src/assets/logo/Trovka-icon.png"
        />
      </div>

      <div className="flex flex-col rounded-2xl bg-neutral-100">

        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 text-base tracking-wide leading-6 text-neutral-500 max-md:mt-6">
                <div className="flex gap-5 justify-between items-start pt-8 pb-14 pl-8 w-[250px] bg-white rounded-tr-lg max-md:pl-5">

                  <div className="flex flex-col mt-2">
                    <div className="flex gap-4 p-2 text-neutral-500 rounded-lg hover:text-white hover:bg-Primary hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer"
                      onClick={() => handleButtonClick('/dashboard-provider')}>
                      <AiOutlineDashboard
                        className="shrink-0 w-6 aspect-square text-[25px]"
                      />
                      <div >{t('Dashboard')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 whitespace-nowrap font-semibold p-2 rounded-lg bg-Primary text-white hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
                      onClick={() => handleButtonClick('/provider-setting')}
                    >
                      <IoSettingsOutline
                        className="shrink-0 w-6 aspect-square text-[25px]"

                      />
                      <div >{t('Profile_Setting')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:text-white hover:bg-Primary hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer"
                      onClick={() => handleButtonClick('/my-service')}
                    >

                      <RiCustomerService2Line className="shrink-0 w-6 aspect-square text-[25px]" />
                      <div>{t('My_Service')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:text-white hover:bg-Primary hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer"
                      onClick={() => handleButtonClick('/provider-review')}
                    >
                      <VscPreview
                        className="shrink-0 w-6 aspect-square text-[25px]"
                      />
                      <div>{t('Reviews')}</div>
                    </div>

                    <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:text-white hover:bg-Primary hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer"
                      onClick={() => handleButtonClick('/provider-password')}
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
                <div className="shrink-0 bg-white rounded-none h-[237px] w-[250px]" />
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center px-16 pt-20 pb-9 bg-white rounded-2xl border border-solid border-slate-100 max-md:px-5 max-md:max-w-full">
                <div className='-mt-[67px]'>
                  <ProviderProfileSetting />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProviderSettingPage;
