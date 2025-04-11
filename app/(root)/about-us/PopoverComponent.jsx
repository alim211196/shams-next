"use client";
import { useEffect } from "react";

const PopoverComponent = ({ achievements }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap");
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
        new bootstrap.Popover(el, {
          placement: "top",
          trigger: "hover",
          customClass: "custom-popover",
          html: true,
          offset: [0, 30],
          fallbackPlacements: [], // Disable other placements
          boundary: "viewport", // Prevent overflowing outside viewport
          content: function () {
            return `
              <div className="popover-content">
                <h5 className="popover-title">${el.getAttribute(
                  "data-title"
                )}</h5>
                <p className="popover-description">${el.getAttribute(
                  "data-description"
                )}</p>
              </div>
            `;
          },
        });
      });
    }
  }, []);

  return (
    <div className="timeline-container">
      {/* Central Horizontal Line */}
      <div className="timeline-horizontal-line"></div>

      {achievements.map((achievement, index) => (
        <div
          key={achievement._id}
          className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
        >
          {/* Vertical Connecting Line */}
          <div className="timeline-vertical-line"></div>

          {/* Year Circle with Popover */}
          <div
            type="button"
            className="circle"
            data-bs-toggle="popover"
            data-placement="top"
            data-year={achievement.year}
            data-title={achievement.title}
            data-description={achievement.description}
          >
            {achievement.year}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopoverComponent;
