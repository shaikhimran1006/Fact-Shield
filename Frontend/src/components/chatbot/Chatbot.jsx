import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bot from "../bot/Bot"; // Ensure the correct path

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Chatbot Icon (Button) */}
      <motion.button 
        className="fixed bottom-6 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }} // Scale button down on tap
      >
        💬
      </motion.button>

      {/* Animate chatbot open/close (growing from button) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-20 right-5 w-[350px] h-[600px] bg-white shadow-lg rounded-lg"
            initial={{
              opacity: 0,
              scale: 0, // Starts from 0 size
              x: 0,
              y: 0,
              originX: 0.5, // origin is set to the button's location
              originY: 1,
            }}
            animate={{
              opacity: 1,
              scale: 1, // Grows to full size
              x: 0,
              y: 0,
              originX: 0.5,
              originY: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0, // Shrinks back to button size
              y: 0,
              x: 0,
              originX: 0.5,
              originY: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-5 right-5 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-gray-800 border-r-[20px] border-r-transparent"></div>
            <div className="absolute -bottom-[18px] right-[21px] w-0 h-0 border-l-[18px] border-l-transparent border-t-[18px] border-t-white border-r-[18px] border-r-transparent"></div>

            {/* Chatbot Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
              <motion.h2 
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                🤖 AI Chat Assistant
              </motion.h2>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-gray-300"
              >
                ✖
              </button>
            </div>

            {/* Chatbot UI */}
            <motion.div 
              className="p-2 h-[calc(100%-60px)] overflow-y-auto rounded-b-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Bot />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
