import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ServiceCard({ imageUrl, serviceCount }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animations once
    threshold: 0.5, // Trigger animation when the card is 50% in view
  });

  return (
    <div className="flex my-[50px] mx-[100px] gap-[30px] flex-wrap justify-center">
      {/* Education Service Card */}
      <motion.article
        className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-[#98caf9] rounded-2xl shadow-sm max-w-[362px]"
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center w-40 max-w-full">
          <motion.img
            loading="lazy"
            src={"/image/image1/education.png"}
            alt={`Service illustration for ${serviceCount} services`}
            className="w-full aspect-[0.98]"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceCount}23 Service
          </motion.p>
        </div>
      </motion.article>

      {/* Auto Service Card */}
      <motion.article
        className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-[#98caf9] rounded-2xl shadow-sm max-w-[362px]"
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center w-40 max-w-full">
          <motion.img
            loading="lazy"
            src={"/image/image1/auto.png"}
            alt={`Service illustration for ${serviceCount} services`}
            className="w-full aspect-[0.98]"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceCount}12 Service
          </motion.p>
        </div>
      </motion.article>

      {/* Restaurant Service Card */}
      <motion.article
        className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-[#98caf9] rounded-2xl shadow-sm max-w-[362px]"
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center w-40 max-w-full">
          <motion.img
            loading="lazy"
            src={"/image/image1/restaurant.png"}
            alt={`Service illustration for ${serviceCount} services`}
            className="w-full aspect-[0.98]"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceCount}22 Service
          </motion.p>
        </div>
      </motion.article>

      {/* Home Service Card */}
      <motion.article
        className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-[#98caf9] rounded-2xl shadow-sm max-w-[362px]"
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center w-40 max-w-full">
          <motion.img
            loading="lazy"
            src={"/image/image1/home.png"}
            alt={`Service illustration for ${serviceCount} services`}
            className="w-full aspect-[0.98]"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceCount}18 Service
          </motion.p>
        </div>
      </motion.article>

      {/* Electronic Service Card */}
      <motion.article
        className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-[#98caf9] rounded-2xl shadow-sm max-w-[362px]"
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center w-40 max-w-full">
          <motion.img
            loading="lazy"
            src={"/image/image1/electronic.png"}
            alt={`Service illustration for ${serviceCount} services`}
            className="w-full aspect-[0.98]"
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceCount}24 Service
          </motion.p>
        </div>
      </motion.article>
    </div>
  );
}

export default ServiceCard;
