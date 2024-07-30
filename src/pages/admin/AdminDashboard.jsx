import React from 'react'
import { NavbarComponent } from '../../components/Navbar/NavbarComponent';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { AiOutlineComment } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { MdOutlineDesignServices, MdBuild } from 'react-icons/md';
import BasicStacking from '../../components/common/BasicStacking';
import { FaUserCog } from 'react-icons/fa';
import { MdSupervisorAccount } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { MdCategory } from "react-icons/md";

const AdminDashboard = () => {
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
                                        <div className="flex gap-4 whitespace-nowrap font-semibold bg-Primary text-white p-2 rounded-lg hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                            onClick={() => handleButtonClick('/admin')}>
                                            <AiOutlineDashboard
                                                className="shrink-0 w-6 aspect-square text-[25px]"
                                            />
                                            <div >Dashboard</div>
                                        </div>

                                        <div className="your-component-container">
                                            <div className="flex gap-4 mt-3 p-2 text-neutral-500 rounded-lg hover:bg-Primary hover:text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
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
                            <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                <div className="flex gap-7 self-start whitespace-nowrap max-md:flex-wrap">

                                    <div className="flex flex-auto gap-10 justify-between px-8 py-6 bg-[#813ffb] rounded-lg border border-solid border-slate-100 max-md:pr-5 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="flex flex-col">
                                            <div className="text-sm leading-4 text-white">Reviews</div>
                                            <div className="mt-5 text-xl font-bold leading-6 text-white">14</div>
                                        </div>
                                        <AiOutlineComment className="shrink-0 w-16 aspect-square text-[50px] text-white" />
                                    </div>

                                    <div className="flex flex-auto gap-10 justify-between py-6 pr-12 pl-5 bg-[#e6523a] rounded-lg border border-solid border-slate-100 max-md:px-5 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="flex flex-col self-start">
                                            <div className="text-sm leading-4 text-white">Users</div>
                                            <div className="mt-5 text-xl font-bold leading-6 text-white">4</div>
                                        </div>
                                        <FaUser className="shrink-0 w-16 aspect-square text-[50px] text-white" />
                                    </div>

                                    <div className="flex flex-auto gap-10 justify-between py-6 pr-12 pl-5 bg-[#4787ff] rounded-lg border border-solid border-slate-100 max-md:px-5 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="flex flex-col self-start">
                                            <div className="text-sm leading-4 text-white">Providers</div>
                                            <div className="mt-5 text-xl font-bold leading-6 text-white">4</div>
                                        </div>
                                        <MdOutlineDesignServices className="shrink-0 w-16 aspect-square text-[50px] text-white" />
                                    </div>

                                    <div className="flex flex-auto gap-10 justify-between py-6 pr-12 pl-5 bg-[#00b8da] rounded-lg border border-solid border-slate-100 max-md:px-5 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="flex flex-col self-start">
                                            <div className="text-sm leading-4 text-white">Services</div>
                                            <div className="mt-5 text-xl font-bold leading-6 text-white">4</div>
                                        </div>
                                        <MdBuild className="shrink-0 w-16 aspect-square text-[50px] text-white" />
                                    </div>

                                </div>

                                <div className="flex flex-col items-center px-16 pt-10 pb-9 mt-6 bg-white rounded-2xl border border-solid border-slate-100 max-md:px-5 max-md:max-w-full">
                                    <BasicStacking />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;





