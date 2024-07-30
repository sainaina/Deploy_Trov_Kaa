import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { Pagination } from "../../components/common/Pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, searchServicesByName } from "../../redux/feature/service/serviceSlice";
import CartService from "../../components/cart/CartService";
import LoadingComponent from "../../components/common/LoadingComponent";
import SlideService from "../../components/animation/SlideService";
import { useTranslation } from "react-i18next";


export const SearchFilterVertical = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const serviceStatus = useSelector((state) => state.services.status);
  const error = useSelector((state) => state.services.error);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [sortBy, setSortBy] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if (query) {
      setSearchQuery(query);
      dispatch(searchServicesByName(query));
    } else {
      dispatch(fetchServices());
    }
  }, [location.search, dispatch]);

  useEffect(() => {
    if (!searchQuery) {
      dispatch(fetchServices(sortBy === 'All' ? '' : sortBy));
    } else {
      dispatch(searchServicesByName(searchQuery));
    }
  }, [sortBy, currentPage, dispatch]);


  const toggleSortByDropdown = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleGridNavigate = () => {
    navigate("/service-filter");
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
    setCurrentPage(1);
    setIsSortByOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/service?query=${searchQuery}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalPages = Math.ceil(services.length / servicesPerPage);

  if (serviceStatus === "loading") {
    return <LoadingComponent />;
  }

  if (serviceStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="w-full overflow-hidden mt-12 px-4 md:px-8 lg:px-24">
        <SlideService />
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mt-6">
          <div className="w-full md:w-1/2 h-[90px] flex flex-col md:flex-row items-start md:items-center">
            <form className="w-full" onSubmit={handleSearch}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                {t('Search')}
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="default-search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={t('Enter_the_Category')}
                />
                <button
                  type="submit"
                  className="absolute right-2.5 bottom-2.5 text-white bg-Secondary hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#022278] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {t('Search')}
                </button>
              </div>
            </form>

          </div>

          <div className="flex flex-row flex-wrap items-center justify-center z-20 -mt-4 sm:mt-0">
            <div className="relative flex-shrink-0 mx-2">
              <button
                onClick={toggleSortByDropdown}
                className="flex justify-between border rounded-[8px] border-gray-500 w-full md:w-[150px]  pl-2 py-2 text-gray-500"
              >
                {sortBy} <RiArrowDropDownLine className="text-2xl md:text-3xl" />
              </button>
              {isSortByOpen && (
                <ul className="absolute block bg-white border border-gray-500 dark:bg-gray-700 dark:border-gray-600 rounded-lg w-[170px] md:w-[180px] mt-2 ">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleSortBy('All')}>All</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleSortBy('Restaurants')}>Restaurants</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleSortBy('Home services')}>Home Services</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleSortBy('Auto services')}>Auto Services</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleSortBy('Electronics')}>Electronics</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleSortBy('Education')}>Education</li>
                </ul>
              )}
            </div>

            <div className="relative flex-shrink-0 mx-2">
              <button
                onClick={toggleCategoryDropdown}
                className="flex justify-between border rounded-[8px] border-gray-500 w-full md:w-[150px]  pl-2 py-2 text-gray-500"
              >
                Category <RiArrowDropDownLine className="text-2xl md:text-3xl" />
              </button>
              {isCategoryOpen && (
                <ul className="absolute block bg-white border border-gray-500 dark:bg-gray-700 dark:border-gray-600 rounded-lg w-[150px] md:w-[150px] mt-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black">Category 1</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black">Category 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black">Category 3</li>
                </ul>
              )}
            </div>

            <div className="flex flex-shrink-0 mx-2">
              <button className="flex justify-center items-center border border-gray-500 rounded-l-lg h-[48px] w-[40px] md:w-[50px] sm:w-[50px] lg:w-[50px] text-black bg-Secondary dark:bg-Primary">
                <TbGridDots className="text-white" />
              </button>

              <button
                onClick={handleGridNavigate}
                className="flex justify-center items-center border border-gray-500 rounded-r-lg  h-[48px] w-[40px] lg:w-[50px] md:w-[50px] sm:w-[50px] text-black dark:text-gray-500"
              >
                <FaList />
              </button>
            </div>
          </div>


        </div>

        <div className='w-full h-full flex flex-wrap justify-center items-center mb-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {currentServices.map(service => (
              <CartService
                key={service.id}
                id={service.id}
                image={service.image}
                name={service.name}
                created_at={service.created_at}
                description={service.description}
                category={service.category}
                location={service.location.province}
                working_days={Array.isArray(service.working_days) ? service.working_days.join(', ') : service.working_days}
              />
            ))}
          </div>
        </div>

        {serviceStatus === 'succeeded' && services.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default SearchFilterVertical;
