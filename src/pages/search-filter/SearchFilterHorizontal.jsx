import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { Pagination } from "../../components/common/Pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, selectServices, selectServiceStatus } from "../../redux/feature/service/serviceSlice";
import { fetchServiceReviews, selectReviews } from "../../redux/feature/review/reviewSlice";
import LoadingComponent from "../../components/common/LoadingComponent";
import SlideService from "../../components/animation/SlideService";
import { useTranslation } from "react-i18next";
import HorizontalCard from "../../components/cart/HorizontalCard";

export const SearchFilterHorizontal = () => {
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  const serviceStatus = useSelector(selectServiceStatus);
  const reviews = useSelector(selectReviews);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [sortBy, setSortBy] = useState('All');
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);
  const navigate = useNavigate();
  const { t } = useTranslation();


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        fetchServices(
          sortBy === "All" ? "" : sortBy,
          category === "All" ? "" : category
        )
      );
    };

    fetchData();
  }, [sortBy, category, currentPage, dispatch]);

  const toggleSortByDropdown = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleGridNavigate = () => {
    navigate("/service");
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
    setCurrentPage(1);
    setIsSortByOpen(false);
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
    setIsCategoryOpen(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchServices(searchQuery));
    setCurrentPage(1);
  };


  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(services.length / servicesPerPage);

  if (serviceStatus === 'loading') {
    return <LoadingComponent />;
  }

  if (serviceStatus === 'failed') {
    return <div>Error loading services</div>;
  }

  return (
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
                onChange={(e) => setSearchQuery(e.target.value)}
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
          <ul className="relative flex-shrink-0 mx-2">
            <div className="relative ">
              <button
                onClick={toggleSortByDropdown}
                className="flex justify-between border rounded-[8px] border-gray-500 w-full md:w-[150px] pl-2 py-2 text-gray-500"
              >
                {sortBy ? sortBy : 'Sort By'} <RiArrowDropDownLine className="text-2xl md:text-3xl" />
              </button>
              {isSortByOpen && (
                <ul className="absolute block bg-white border border-gray-500 dark:bg-gray-700 dark:border-gray-600 rounded-lg w-[180px] md:w-[180px] mt-2">
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
                className="flex justify-between border rounded-[8px] border-gray-500 w-full md:w-[150px] pl-2 py-2 text-gray-500"
              >
                {category ? category : 'Category'} <RiArrowDropDownLine className="text-2xl md:text-3xl" />
              </button>
              {isCategoryOpen && (
                <ul className="absolute block bg-white border border-gray-500 dark:bg-gray-700 dark:border-gray-600 rounded-lg w-[150px] md:w-[150px] mt-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleCategory('All')}>All</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleCategory('Category 1')}>Category 1</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleCategory('Category 2')}>Category 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black" onClick={() => handleCategory('Category 3')}>Category 3</li>
                </ul>
              )}
            </div>

            <div className="flex flex-shrink-0 mx-2">
              <button
                onClick={handleGridNavigate}
                className="flex justify-center items-center border border-gray-500 rounded-l-lg h-[48px] w-[40px] md:w-[50px] sm:w-[50px] lg:w-[50px] text-black  dark:text-gray-500"
              >
                <TbGridDots />
              </button>

              <button className="flex justify-center items-center border bg-Secondary border-gray-500 rounded-r-lg  h-[48px] w-[40px] lg:w-[50px] md:w-[50px] sm:w-[50px] text-white dark:bg-Primary">
                <FaList />
              </button>
            </div>

          </ul>
        </div>
      </div>

      {services.length === 0 ? (
        <div className="mt-6 text-center text-gray-400">No services found.</div>
      ) : (
        <div className="flex justify-around flex-wrap ">
          {currentServices.map((service) => {
            const serviceReviews = reviews.filter(review => review.service === service.id);
            return (
              <HorizontalCard
                key={service.id}
                id={service.id}
                image={service.image}
                name={service.name}
                created_at={service.created_at}
                description={service.description}
                category={service.category}
                location={`${service.location.province}, ${service.location.district}, ${service.location.commune}, ${service.location.village}`}
                working_days={Array.isArray(service.working_days) ? service.working_days.join(', ') : service.working_days}
                reviews={serviceReviews}
              />
            );
          })}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>

  );
}
