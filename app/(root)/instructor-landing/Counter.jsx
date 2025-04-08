"use client"; // Ensure this runs on the client side

import { useEffect, useRef, useState } from "react";

const Counter = ({ value, type }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startCounter = (element) => {
      let target = parseInt(element.dataset.count, 10);
      let count = 0;
      let speed = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += Math.ceil(speed);
          setDisplayValue(count);
          requestAnimationFrame(updateCount);
        } else {
          setDisplayValue(target);
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target); // Stop observing once counted
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <h4 ref={ref} data-count={value}>
      {displayValue}
      {[4, 5].includes(type) && "+"}
    </h4>
  );
};

export default Counter;
