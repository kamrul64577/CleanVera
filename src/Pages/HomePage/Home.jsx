import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
            <motion.div 
                className="text-center p-12 w-full h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-3xl border border-gray-100 shadow-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Take Back Your Time and Energy
                </motion.h1>
                <motion.h2 
                    className="text-xl md:text-2xl font-medium mb-8 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Outsource Your Cleaning
                </motion.h2>
                <motion.p 
                    className="text-lg md:text-xl mb-8 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Hassle-free cleaners for commercial and vacation rental hosts.
                </motion.p>
                <motion.button
                    className="px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </motion.div>
        </div>
    );
}

export default Home;
