import ProfileDropdown from "../provider-components/ProfileDropdown";
import React, { useState, useEffect } from "react";
import { CiLogin, CiLight, CiDark } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export const NavbarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const darkModeClass = "dark";
    const lightModeClass = "light";
    if (darkMode) {
      document.body.classList.add(darkModeClass);
      document.body.classList.remove(lightModeClass);
    } else {
      document.body.classList.add(lightModeClass);
      document.body.classList.remove(darkModeClass);
    }
  }, [darkMode]);

  const menuList = [
    { path: "/service", title: t("Service") },
    { path: "/category", title: t("Category") },
    { path: "/contact-us", title: t("Contact") },
    { path: "/about-us", title: t("About Us") },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[50px] flex justify-center items-center bg-Primary text-white z-40">
        <p className="text-center text-[15px] flex items-center justify-center space-x-2">
          <a href="#">
            <img
              src="/image/image1/telegram.png"
              className="w-[30px] h-[30px]"
              alt="Telegram"
            />
          </a>
          <span>
            <a href="https://t.me/+hZuf-aIGzB4yYjVl" className="text-[#98caf9]">
              {t("Join_our_community")}
            </a>{" "}
            {t("Support_and_Connect")}
          </span>
        </p>
      </div>
      <nav className="navbar mt-[17px] fixed top-8 left-0 w-full bg-white dark:bg-gray-900 dark:text-white z-50">
        <div className="container mx-auto flex items-center justify-between h-[70px] p-4 md:p-0">
          <img
            className="w-40 ml-14 hover:cursor-pointer"
            src="/image/logo/logo.png"
            alt="Logo"
            onClick={() => navigate("/")}
          />

          <ul className="hidden md:flex justify-center space-x-10 m-auto">
            {menuList.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.path}
                  className="text-textColor hover:text-primary transition-colors duration-300 text-[18px] dark:text-gray-300"
                  activeClassName="text-primary"
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center ml-auto mr-14 space-x-4 justify-evenly">
            <div className="flex items-center">
              <button
                onClick={() => changeLanguage("kh")}
                className="text-textColor hover:text-primary transition-colors duration-300"
              >
                KH
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="text-textColor hover:text-primary ml-[10px] transition-colors duration-300"
              >
                EN
              </button>
              <button
                onClick={toggleDarkMode}
                className="ml-4 text-textColor hover:text-primary transition-colors duration-300 dark:text-gray-300"
              >
                {darkMode ? (
                  <CiLight
                    className="text-[22px]"
                    style={{ color: "#FFFFFF", opacity: 0.9 }}
                  />
                ) : (
                  <CiDark
                    className="text-[22px]"
                    style={{ color: "#000000", opacity: 0.9 }}
                  />
                )}
              </button>
            </div>
            <ProfileDropdown />
          </div>
        </div>
      </nav>
      <div className="pt-[135px]">
        {" "}
        {/* Adjust padding as needed */}
        {/* Your main content goes here */}
      </div>
    </>
  );
};
