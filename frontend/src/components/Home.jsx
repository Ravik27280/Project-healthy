import React from 'react';
import { motion } from 'framer-motion';
import '../../public/Home.css'; // Make sure to import the CSS file

const HomePage = () => {
  return (
    <div className="font-sans text-darkgray">
      <div className="parallax-bg">
        <div className="content">
          <div className="flex flex-col items-center justify-center h-screen text-white">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ y: -50, opacity: 0, scale: 1.2 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Welcome to Calorie Counter
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            >
              Your health companion to track daily calories and stay fit
            </motion.p>
            <motion.button
              className="bg-white text-primary font-semibold py-2 px-4 rounded shadow-lg hover:bg-lightgray transform transition-transform duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-lightgray">
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Healthy Food"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-primary">Track Your Intake</h2>
          <p className="text-lg">
            Monitor your daily calorie intake and make informed dietary choices.
          </p>
        </motion.div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center justify-center py-16 px-8 bg-white">
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
            alt="Exercise"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-secondary">Stay Motivated</h2>
          <p className="text-lg">
            Set goals, track progress, and achieve a healthier lifestyle.
          </p>
        </motion.div>
      </section>

      <footer className="bg-darkgray text-white py-6 text-center">
        <p>&copy; 2024 Calorie Counter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
