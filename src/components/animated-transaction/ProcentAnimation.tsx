import React, { useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Defines the type for the percentage items.
interface PercentItem {
  id: number;
  value: number;
  position: number;
}

export interface ProcentAnimationHandles {
  startAnimation: () => void;
}

export const ProcentAnimation = React.forwardRef<ProcentAnimationHandles, object>((_, ref) => {
  const [items, setItems] = useState<PercentItem[]>([]);
  useImperativeHandle(ref, () => ({ startAnimation: () => {
    setItems([]);
    Array.from({ length: 6 }, (_, i) => {
      const value = 3 + Math.floor(Math.random() * 11);
      setTimeout(() => {
        const id = Date.now() + i;
        const pos = 5 + Math.random() * 70;
        setItems(prev => [...prev, { id, value, position: pos }]);
        setTimeout(() => setItems(prev => prev.filter(it => it.id !== id)), 2000);
      }, i * 300);
    });
  }}));

  return (
    <div className="absolute w-[19.6%] h-[18.9%] bg-black/0 right-[22.4%] top-[20.2%] [border-radius:25px_25px_0px_0px] overflow-hidden">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-white font-bold"
            style={{ left: `${item.position}%`, bottom: 0 }}
            initial={{ y: '0%', opacity: 0 }}
            animate={{ y: '-600%', opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ y: { duration: 2, ease: 'linear' }, opacity: { duration: 2, times: [0, 0.1, 0.9, 1] } }}
          >
            <p className="text-gray text-[12px] font-normal">{item.value}%</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
});

export default ProcentAnimation;
