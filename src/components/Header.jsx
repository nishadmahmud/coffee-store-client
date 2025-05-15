import React from "react";

const Header = () => {
  return (
    <div className="bg-[url(src/assets/images/more/15.jpg)] bg-cover bg-center">
      <div className="flex gap-3 justify-center items-center">
        <img src="src/assets/images/more/logo1.png" className="h-16 w-auto my-2.5" />
        <h2 className="text-5xl text-white">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
