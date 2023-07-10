import React from "react";
import Logo from "../../images/logo.png";
const Header: React.FC<{}> = () => {
  return (
    <div className="shadow-md bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-2 py-8">
          <div>
            <img src={Logo} alt="Proagrica" width="150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
