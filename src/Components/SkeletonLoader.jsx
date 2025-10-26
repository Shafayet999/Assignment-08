import React, { useState } from "react";

import logo from '../assets/logo.png'

const ImageLoader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative mt-50">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={logo}
            className="w-20 h-20 animate-spin"
          />
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
