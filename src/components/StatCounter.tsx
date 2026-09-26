import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className = 'text-5xl md:text-7xl font-sans font-bold tracking-tight text-white',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = value;
    const totalDurationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / totalDurationMs, 1);
      
      // Crisp ease-out quartic
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="inline-flex items-baseline">
      <span className={className}>
        {prefix}
        {count}
        {suffix}
      </span>
    </div>
  );
};
