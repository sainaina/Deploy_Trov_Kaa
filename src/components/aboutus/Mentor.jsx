import React from "react";
import { Avatar } from "@material-tailwind/react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
export function Mentor() {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div
      className="flex text-Primary dark:text-Action my-[5px] flex-wrap gap-[150px] justify-center my-[90px]"
      ref={ref}
    >
      {[
        {
          src: "/image/image1/cher-phea.jpg",
          name: "Seam Chiminh",
          role: "Frontend Developer",
          github: "https://github.com/SeamChiminh",
          facebook: "https://www.facebook.com/SeamChiminh?mibextid=LQQJ4d",
          instagram:
            "https://www.instagram.com/pu_chhveng/?igsh=MW1vcG52a2F2bHZ4cw%3D%3D&utm_source=qr",
        },
        {
          src: "/image/image1/cher-keo.jpg",
          name: "Sean ChanPisei",
          role: "Frontend Developer",
          github: "https://github.com/SeanChanpisey",
          facebook: "https://www.facebook.com/smos.konzii?mibextid=LQQJ4d",
          instagram:
            "https://www.instagram.com/sean_chanpisey/?igsh=bG40MzRkdTM4OHM4&utm_source=qr",
        },
      ].map((profile, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={index % 2 === 0 ? slideLeft : slideRight}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Avatar
            src={profile.src}
            alt="avatar"
            withBorder={true}
            className="w-[200px] h-[200px] rounded-full px-[5px] py-[5px] dark:hover:bg-Primary dark:border-Primary border-Action hover:bg-Action hover:border-Action duration-300 rounded-full transform transition-transform  hover:scale-110"
          />
          <div className="mt-[15px] text-center">
            <h2 className="">{profile.name}</h2>
            <h2 className="text-gray-800 dark:text-gray-300">{profile.role}</h2>
            <div className="flex gap-[20px] mt-[10px] justify-center">
              <a href={profile.github}>
                <img
                  src="./public/image/icon/github.svg"
                  className="w-[30px] h-[30px]"
                  alt="GitHub"
                />
              </a>
              <a href={profile.facebook}>
                <img
                  src="./public/image/icon/facebook.svg"
                  className="w-[30px] h-[30px]"
                  alt="Facebook"
                />
              </a>
              <a href={profile.instagram}>
                <img
                  src="./public/image/icon/square-instagram.svg"
                  className="w-[30px] h-[30px]"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
