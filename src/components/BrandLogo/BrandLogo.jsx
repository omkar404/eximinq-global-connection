import React from "react";
import brandLogo from "../../assets/images/logo.png"; // adjust relative path 

const BrandLogo = () => {
  return (
    <div className="flex flex-col items-start">
      <img
        src={brandLogo}
        alt="EXIMINQ - Global Connections Contact"
        className="w-[190px] h-auto"
      />
    </div>
  );
};

export default BrandLogo;
