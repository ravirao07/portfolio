import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'; // Adds dynamic effects
import './Style/Loading.css';

const Loading = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="animation-wrapper"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <Player
          autoplay
          loop
          src="../assets/unique-loader.json" // Replace with your chosen Lottie file
          style={{ height: '200px', width: '200px' }}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Loading... Please Wait!
      </motion.h1>
    </motion.div>
  );
};

export default Loading;
