import React, { useEffect } from "react";
import { FaStar, FaPhoneAlt, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceProviderCard = ({ service, averageRating, reviewCount }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Service data:", service);
  }, [service]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleAddToFavorites = () => {
    console.log("Added to favorites");
  };

  const createdBy = service.created_by || {};
  const locationBy = service.location || {};

  return (
    <div className="px-6 py-12 lg:px-10 md:px-5 flex flex-wrap justify-center w-full -mt-5">
      <div className="flex-auto lg:w-[120px] md:w-[200px] w-full max-w-[full] mr-5 max-[670px]:p-0">
        <img
          src={service.image || "default-image-path.jpg"}
          alt="Service"
          className="w-full h-auto lg:h-[400px] rounded-md object-cover transition-transform duration-300 hover:scale-105 hover:shadow-md max-[670px]:h-full"
        />
      </div>
      <div className="w-full lg:w-[400px] md:w-full bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm border transition-shadow duration-300 hover:shadow-md mt-4 lg:mt-0">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium dark:text-gray-200">{t("Service_Provider")}</h3>
          <button
            onClick={handleAddToFavorites}
            className="flex items-center text-Secondary border border-Secondary dark:bg-gray-800 px-2 py-1 rounded-md transition-transform duration-300 hover:scale-110 hover:bg-gray-100"
          >
            <FaHeart className="mr-1" />
            {t("Add_to_Fav")}
          </button>
        </div>
        <div className="flex items-center mb-4 hover:cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => handleButtonClick(`/provider-profile/${service.id}`)}>
          <img src={createdBy.avatar || ".///src/assets/image/profile.png"} alt="Profile" className="w-12 h-12 rounded-full mr-3 object-cover " />
          <div>
            <h4 className="text-lg font-medium transition-colors duration-300 hover:text-Secondary">
              {createdBy.username || "Unknown"}
            </h4>
            <p className="text-sm text-gray-400">
              {t("Member_since")} {new Date(createdBy.created_at).getFullYear() || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
        <div className="flex text-Secondary">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < averageRating ? "text-yellow-400" : "text-gray-300"} />
            ))}
          </div>
          <p className="text-sm text-gray-500 ml-2 dark:text-gray-400">({reviewCount} reviews)</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium dark:text-gray-200">{service.name || "Service Name"}</h4>
          <p className="text-sm text-gray-500 transition-transform duration-300 dark:text-gray-400 hover:translate-x-1 hover:text-Secondary">
            {locationBy.province || "Unknown Location"}
          </p>
          <span className="inline-block bg-Secondary text-white px-2 py-1 rounded-md text-xs mt-1 transition-transform duration-300 hover:scale-105 hover:bg-opacity-80">
            {service.categoryType || "Unknown Category"}
          </span>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium">{t("Price")} ${service.price != null ? service.price : "N/A"}</h4>
        </div>
        <button className="w-full bg-Primary text-white px-4 py-2 rounded-md flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-opacity-90">
          <FaPhoneAlt className="mr-2" />
          {t("Phone")} : {service.phone_number || "N/A"}
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
