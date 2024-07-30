import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, selectUserRole } from "../../redux/feature/user/userSlice"; // Import the selectors and logout action
import ConfirmLogoutModal from "./ConfirmLogoutModal"; // Import your ConfirmLogoutModal component

export default function ProfileDropdown({ onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  // Use selector to get the user role
  const userRole = useSelector(selectUserRole);
  const userName = useSelector(selectUser);
  const user = useSelector(selectUser);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  const handleButtonClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    setShowModal(true); // Show the confirmation modal
  };

  const handleConfirmLogout = () => {
    dispatch(logout()); // Dispatch logout action
    onLogout(); // Call the onLogout prop
    navigate("/"); // Redirect to login page
    setDropdownOpen(false);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderLinks = () => {
    switch (userRole) {
      case 'admin':
        return (
          <>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/admin-dashboard')}
            >
              Admin Dashboard
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/admin-settings')}
            >
              Admin Settings
            </button>
            {/* Add more admin-specific links here */}
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        );
      case 'provider':
        return (
          <>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/dashboard-provider')}
            >
              Provider Dashboard
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/provider-setting')}
            >
              Provider Settings
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/provider-review')}
            >
              Provider Reviews
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/provider-password')}
            >
              Change Password
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        );
      case 'user':
      default:
        return (
          <>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/dashboard-user')}
            >
              User Dashboard
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/user-setting')}
            >
              User Settings
            </button>
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={() => handleButtonClick('/user-favorite')}
            >
              User Favorite 
            </button>
            {/* Add more user-specific links here */}
            <button
              className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        );
    }
  };

  return (
    <>
      <section className="bg-gray-2 py-20 dark:bg-dark">
        <div className="container">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <button
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-left"
              >
                <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
                  <img
                    src={user?.avatar || "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}
                    alt="avatar"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                  <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
                </div>
              </button>
              <div
                ref={dropdown}
                className={`absolute right-0 top-full z-50 w-[200px] space-y-1 rounded bg-white p-2 shadow-card border dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
              >
                <div className="px-3 py-2">
                  <p className="text-base font-medium text-dark dark:text-white">
                    {userName?.username}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {userRole}
                  </p>
                </div>
                {renderLinks()}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConfirmLogoutModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmLogout} 
      />
    </>
  );
}
