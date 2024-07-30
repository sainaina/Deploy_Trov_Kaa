import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Card = () => {
  const { t } = useTranslation();

  const controlsGoal = useAnimation();
  const controlsMission = useAnimation();
  const controlsVision = useAnimation();

  const { ref: refGoal, inView: inViewGoal } = useInView({
    triggerOnce: false,
  });
  const { ref: refMission, inView: inViewMission } = useInView({
    triggerOnce: false,
  });
  const { ref: refVision, inView: inViewVision } = useInView({
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inViewGoal) {
      controlsGoal.start("visible");
    } else {
      controlsGoal.start("hidden");
    }
  }, [controlsGoal, inViewGoal]);

  React.useEffect(() => {
    if (inViewMission) {
      controlsMission.start("visible");
    } else {
      controlsMission.start("hidden");
    }
  }, [controlsMission, inViewMission]);

  React.useEffect(() => {
    if (inViewVision) {
      controlsVision.start("visible");
    } else {
      controlsVision.start("hidden");
    }
  }, [controlsVision, inViewVision]);

  return (
    <div className="px-5 xl:px-[90px] mb-[90px]">
      {/* Animation 1: Goal */}
      <div className="flex flex-col mt-[70px] items-center md:flex-row gap-5 mb-[90px]">
        <div className="flex-1">
          <div className="text-2xl font-bold text-center text-Primary dark:text-Secondary">
            {t("Goal")}
          </div>
          <motion.div
            ref={refGoal}
            initial="hidden"
            animate={controlsGoal}
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className="mt-9 text-base text-gray-900 max-md:max-w-full dark:text-gray-300"
          >
            {t("Goal_Content")}
          </motion.div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="w-2/2 max-w-[400px]">
            <lottie-player
              src="https://lottie.host/b162f405-2819-4c84-9127-a13cc62a4878/nNQZuisCYR.json"
              background="##fff"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </div>
        </div>
      </div>

      {/* Animation 2: Mission */}
      <div className="flex flex-col items-center md:flex-row-reverse gap-5 mb-[100px]">
        <div className="flex-1">
          <div className=" text-2xl font-bold text-center text-Primary dark:text-Secondary">
            {t("Mission")}
          </div>
          <motion.div
            ref={refMission}
            initial="hidden"
            animate={controlsMission}
            variants={fadeRight}
            transition={{ duration: 0.5 }}
            className="mt-9 text-base text-gray-900 max-md:max-w-full dark:text-gray-300"
          >
            {t("Mission_Content")}
          </motion.div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-2/2 max-w-[400px]">
            <lottie-player
              src="https://lottie.host/acc7e1f3-1d16-4219-9380-cdc7d847e7c7/HUCKgu0ZOV.json"
              background="##FFFFFF"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </div>
        </div>
      </div>

      {/* Animation 3: Vision */}
      <div className="flex flex-col items-center md:flex-row gap-5 mb-[90px]">
        <div className="flex-1">
          <div className="text-2xl font-bold text-center text-Primary dark:text-Secondary">
            {t("Vision")}
          </div>
          <motion.div
            ref={refVision}
            initial="hidden"
            animate={controlsVision}
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className="mt-9 text-base text-gray-900 max-md:max-w-full dark:text-gray-300"
          >
            {t("Vision_Content")}
          </motion.div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="w-2/2 max-w-[400px]">
            <dotlottie-player
              src="https://lottie.host/4addf017-a16f-4da2-b0f9-733077a73b4a/dJvPs4a4sa.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
