import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import 'react-loading-skeleton/dist/skeleton.css';

import CategoryLocation from "../../components/cart/home-page-components/CategoryLocation";
import HeroSection from "../../components/cart/home-page-components/HeroSection";
import HomeProfile from "../../components/cart/home-page-components/HomeProfile";
import ServiceCard from "../../components/cart/home-page-components/ServiceCard";
import { CartService } from "../../components/cart/CartService";
import StatisticsSection from "../../components/cart/home-page-components/StatisticItem";
import SuggesdedCustomer from "../../components/cart/home-page-components/SuggesdedCustomer";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../redux/feature/service/serviceSlice";
import { fetchServiceReviews } from "../../redux/feature/review/reviewSlice";
import { Metadata } from '../../lib/Metadata';
import DropdownCategory from "../../components/button/DropdownCategory";
import SlideImageComponent from "../../components/cart/home-page-components/SlideImageComponent";

export function HomeNotLogin() {
  const dispatch = useDispatch();
  const cartServiceRef = useRef([]);
  const [inView, setInView] = useState([]);
  const { t } = useTranslation();
  const services = useSelector((state) => state.services.data);
  const serviceStatus = useSelector((state) => state.services.status);
  const error = useSelector((state) => state.services.error);
  const reviews = useSelector((state) => state.reviews.reviews);
  const [currentPage, setCurrentPage] = useState(1);
  const [popularServices, setPopularServices] = useState([]);
  const servicesPerPage = 10;
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchServices());
      await dispatch(fetchServiceReviews()); 
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (services.length > 0 && reviews.length > 0) {
      const serviceRatings = services.map((service) => {
        const serviceReviews = reviews.filter(review => review.service === service.id);
        const totalRating = serviceReviews.reduce((acc, review) => acc + review.rate_star, 0);
        const avgRating = serviceReviews.length ? totalRating / serviceReviews.length : 0;
        return { ...service, avgRating };
      });

      const sortedServices = serviceRatings.sort((a, b) => b.avgRating - a.avgRating);
      setPopularServices(sortedServices.slice(0, 6)); // Select top 6
    }
  }, [services, reviews]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prevInView) => [...prevInView, entry.target]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cartServiceRef.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cartServiceRef.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);


  return (
    <div>
      <div>
        <Metadata
          title="Home | TrovKa"
          description="Welcome to TrovKa-Service"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
        />
      </div>

      <div className="flex flex-col lg:flex-row xl:px-0 xl:mx-auto xl:max-w-[1296px]">
        <div className="flex px-4 mt-[150px] sm:px-6 md:px-8 lg:px-16 xl:px-24 mt-[100px]">
          <div className="w-full max-w-[600px] h-[90px] text-lg mx-auto">
            <HeroSection />
            <CategoryLocation />
          </div>
        </div>
        <div className="hidden lg:block mt-[100px]">
          <HomeProfile />
        </div>
      </div>


      <div className="mt-[190px] mb-[60px] text-center text-[#022278] dark:text-Secondary font-bold">
        <p className="text-2xl ">{t("Welcome_Services")}</p>
      </div>
      <DropdownCategory />
      <SlideImageComponent/>

      <div className="flex px-24 justify-center mt-[80px] text-[#022278] dark:text-Secondary text-xl font-semibold">
        <div className="w-full max-w-[1286px] px-4 max-[490px]:-ml-20 max-[490px]:-mb-[80px] max-[405px]:-ml-[110px] max-[360px]:-ml-[140px] max-[320px]:-ml-[190px]">
          <p>{t("All_Category")}</p>
          <div className="mt-[5px] border border-[#022278] dark:border-Secondary mb-[80px] max-[490px]:w-[280px] max-[490px]:mx-auto w-[full]"></div>
        </div>
      </div>

      <ServiceCard />

      <div className="flex px-24 justify-center mt-[80px] text-[#022278] dark:text-Secondary text-xl font-semibold">
        <div className="w-full max-w-[1286px] px-4 max-[490px]:-ml-20 max-[490px]:-mb-[80px]  max-[405px]:-ml-[110px] max-[330px]:-mb-[50px] max-[360px]:-ml-[140px] max-[320px]:-ml-[190px]">
          <p>{t("All_Service")}</p>
          <div className="mt-[5px] border border-[#022278] dark:border-Secondary mb-[80px] max-[490px]:w-[280px] max-[490px]:mx-auto w-[full]"></div>
        </div>
      </div>

      <div className="flex justify-center gap-[50px]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {currentServices.map((service) => (
            <CartService
              key={service.id}
              id={service.id}
              image={service.image}
              name={service.name}
              created_at={service.created_at}
              description={service.description}
              category={service.category}
              location={service.location.province}
              working_days={service.working_days}
            />
          ))}
        </div>
      </div>

      <div className="flex px-24 justify-center mt-[80px] text-[#022278] dark:text-Secondary text-xl font-semibold">
        <div className="w-full max-w-[1286px] px-4 max-[490px]:-ml-20 max-[490px]:-mb-[80px]  max-[405px]:-ml-[110px] max-[330px]:-mb-[50px] max-[360px]:-ml-[140px] max-[320px]:-ml-[190px]">
          <p>{t("Popular_Service")}</p>
          <div className="mt-[5px] border border-[#022278] dark:border-Secondary mb-[80px] max-[490px]:w-[280px] max-[490px]:mx-auto w-[full]"></div>
        </div>
      </div>


      <div className="flex justify-center gap-[40px] flex-wrap">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {popularServices.map((service) => (
            <CartService
              key={service.id}
              id={service.id}
              image={service.image}
              name={service.name}
              created_at={service.created_at}
              description={service.description}
              category={service.category}
              location={service.location.province}
              working_days={service.working_days}
            />
          ))}
        </div>

      </div>
      <StatisticsSection />
      <SuggesdedCustomer />
    </div>
  );
}

export default HomeNotLogin;
