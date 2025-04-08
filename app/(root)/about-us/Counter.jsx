"use client";

import { useEffect, useRef, useState } from "react";

const formatValue = (value, type) => {
  if (type === "percentage") {
    return `${value}%`;
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K+";
  } else if (value >= 100) {
    return Math.floor(value / 100) * 100 + "+";
  } else if (value >= 10) {
    return Math.floor(value / 10) * 10 + "+";
  }
  return value;
};

const Counter = ({ value, type }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startCounter = (targetValue) => {
      let count = 0;
      let speed = targetValue / 100;

      const updateCount = () => {
        if (count < targetValue) {
          count += Math.ceil(speed);
          setDisplayValue(count);
          requestAnimationFrame(updateCount);
        } else {
          setDisplayValue(formatValue(targetValue, type));
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter(value);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, type]);

  return <h4 ref={ref}>{displayValue}</h4>;
};

export default Counter;
