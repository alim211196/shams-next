"use client";

import { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log("Bootstrap JS loaded.");
      })
      .catch((err) => {
        console.error("Error loading Bootstrap JS", err);
      });
  }, []);

  return null;
};

export default BootstrapLoader;
