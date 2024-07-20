 "use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion, AnimatePresence } from 'framer-motion';
// import { Chips } from 'react-chips-input';
export default function FormulaBox(props) {
  const [isOpen, setIsOpen] = useState(true); 
  // const [chips, setChips] = useState([ "Item 1","Item 1","Item 1","Item 1"]);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  const handleAddChip = (chip) => {
    setChips([...chips, chip]);
  };

  return (
    <div className="rounded overflow-hidden border-2 mb-3">
      <div className="bg-gray-100 flex justify-between p-2">
        <div className="flex items-center gap-2">
          <motion.div 
            className="transition-all duration-75 cursor-pointer" 
            onClick={toggleContent}
            animate={{ rotate: isOpen ? 0 : -90 }} 
          >
            <Icon icon="bxs:down-arrow" />
          </motion.div>
          <div className="text-sm">{props.name}</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-lg text-gray-500 hover:bg-gray-300 p-1'><Icon icon="ep:info-filled" /></div>
          <div className='text-lg text-gray-500 hover:bg-gray-300 p-1'><Icon icon="fe:elipsis-h" /></div>
        </div>
      </div>
      <div className='p-3 text-3xl bg-blue-50'>
        $0.00
      </div>
      
      
      <AnimatePresence> 
        {isOpen && ( 
          <motion.div 
            className="p-2 content-box"
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
          >
            <div className='border p-3'>
            {/* <Chips
              value={chips}
              onChange={handleAddChip}
              suggestions={["Your", "Data", "Here"]}
            /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
