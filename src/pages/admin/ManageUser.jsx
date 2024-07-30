import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import { MdSupervisorAccount } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { MdCategory } from "react-icons/md";
import { ManageUserComponent } from '../../components/admin-component/ManageUserComponent';


const ManageUser = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };
    return (
        <>
            <div className="flex flex-col rounded-2xl bg-neutral-100">

                <div className="mt-8 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-20 text-base tracking-wide leading-6 text-neutral-500 max-md:mt-6">
                                <div className="flex gap-5 justify-between items-start pt-8 pb-14 pl-8 w-[250px] bg-white rounded-tr-lg max-md:pl-5">

                                    <div className="flex flex-col mt-2">
                                        <div className="flex gap-4 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                            onClick={() => handleButtonClick('/admin')}>
                                            <AiOutlineDashboard
                                                className="shrink-0 w-6 aspect-square text-[25px]"
                                            />
                                            <div >Dashboard</div>
                                        </div>

                                        <div className="your-component-container">
                                            <div className="flex gap-4 mt-3 whitespace-nowrap font-semibold bg-Primary text-white p-2 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                                onClick={() => handleButtonClick('/manage-user')}
                                            >
                                                <FaUserCog className="shrink-0 w-6 aspect-square text-[25px]" />
                                                <div> Manage Users </div>
                                            </div>
                                        </div>

                                        <div className="your-component-container">
                                            <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                                onClick={() => handleButtonClick('/manage-provider')}
                                            >
                                                <MdSupervisorAccount className="shrink-0 w-6 aspect-square text-[25px]" />
                                                <div> Manage Providers </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                            onClick={() => handleButtonClick('/manage-service')}
                                        >
                                            <IoSettingsOutline
                                                className="shrink-0 w-6 aspect-square text-[25px]"

                                            />
                                            <div > Services </div>
                                        </div>

                                        <div className="your-component-container">
                                            <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                                onClick={() => handleButtonClick('/manage-category')}
                                            >
                                                <MdCategory className="shrink-0 w-6 aspect-square text-[25px]" />
                                                <div>Category</div>
                                            </div>
                                        </div>

                                        <div className="your-component-container">
                                            <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                                onClick={() => handleButtonClick('/manage-review')}
                                            >
                                                <MdRateReview className="shrink-0 w-6 aspect-square text-[25px]" />
                                                <div>Reviews</div>
                                            </div>
                                        </div>

                                        <div className="your-component-container">
                                            <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                                onClick={() => handleButtonClick('/admin-setting')}
                                            >
                                                <AiOutlineUser className="shrink-0 w-6 aspect-square text-[25px]" />
                                                <div>Profile Settings</div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                            onClick={() => handleButtonClick('/admin-password')}
                                        >
                                            <RiLockPasswordLine
                                                className="shrink-0 w-6 aspect-square text-[25px]"
                                            />
                                            <div >
                                                Change Password
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="shrink-0 bg-white rounded-none h-[237px] w-[250px]" />
                            </div>
                        </div>

                        <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                            <ManageUserComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUser;





