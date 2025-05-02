import React from "react";
import Card from "./Card";
import { motion } from 'motion/react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const dashBoardNavigationHandler = () => {

  };

  return (
    <div className="min-h-[calc(100vh-64px)] px-4 sm:px-8 lg:px-14">
      <div className="flex flex-col lg:flex-row pt-16 lg:py-5 gap-8 lg:gap-10 justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transtion={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 text-3xl md:text-5xl leading-10 sm:leading-[45px] md:leading-[55px] w-full md:w-[70%] lg:w-full">
            Linklytics Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Linklytics streamlines the process of URL shortening, making
            sharing links effortless and efficient. With its user-friendly
            interface, Linklytics allows you to generate concise,
            easy-to-share URLs in seconds. Simplify your sharing experience
            with Linklytics today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigationHandler}
              className="bg-custom-gradient w-40 text-white rounded-md py-2">
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigationHandler}
              className="border border-btnColor text-btnColor w-40 rounded-md py-2">
              Create Short Link
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[480px] object-cover rounded-md" src="./images/logo.png" alt="Linklytics Logo" />
        </div>
      </div>

      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center">
          Trusted by individuals and teams at the world best companies
        </motion.p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
