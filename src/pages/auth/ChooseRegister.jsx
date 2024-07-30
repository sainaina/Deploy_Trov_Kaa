import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ChooseRegister() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white rounded-2xl">
      <div className="flex flex-col items-center self-center mt-24 w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
        <div className="px-5 max-w-full w-[574px]">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[30%] h-[70px] max-md:ml-0 max-md:w-full justify-center">
              <img
                loading="lazy"
                srcSet="src/assets/logo/trovka-icon.png"
                className="grow shrink-0 max-w-full rounded-full aspect-[1.03] w-[141px] max-md:mt-3.5"
              />
            </div>
            <div className="flex w-[700px] max-md:ml-1 max-md:w-full">
              <div className="my-auto text-2xl font-bold text-Primary">
                Welcome to OUR TROVKA Service
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-full w-[828px] max-md:mt-10 align-center text-center justify-center">
          <div className="flex gap-10 max-md:flex-col max-md:gap-0 text-center align-center justify-center">
            <div className="flex flex-col w-6/12 max-md:ml-8 max-md:w-full text-center">
              <button
                onClick={() => navigate('/register')}
                className="flex justify-center text-center px-16 pt-20 pb-20 w-full text-2xl text-white bg-Secondary rounded-2xl max-md:pr-7 max-md:pl-7 max-md:mt-10"
              >
                Sign Up As Customer
              </button>
              
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <button
                onClick={() => navigate('/provider-register')}
                className="flex text-center align-center justify-center px-16 pt-20 pb-20 w-full text-2xl text-white bg-Secondary rounded-2xl max-md:px-8 max-md:mt-10"
              >
                Sign Up As Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseRegister;
