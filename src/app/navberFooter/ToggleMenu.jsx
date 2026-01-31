import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router";

function ToggleMenu({ setOpenMenu, openMenu }) {
  const [shopNow, setShopNow] = useState(false);

  const navLinks = [
    { name: "Home", pathName: "home", path: "/" },
    { name: "Shop now", pathName: "shop-now" },
    { name: "Product", pathName: "product", path: "/product" },
    { name: "Deals", pathName: "deals", path: "/deals" },
    { name: "New Arrivals", pathName: "new-arrivals", path: "/new-arrivals" },
    { name: "Best Sellers", pathName: "best-sellers", path: "/best-sellers" },
    { name: "About Us", pathName: "about-us", path: "/about-us" },
    { name: "Contact", pathName: "contact", path: "/contact" },
  ];
  return (
    <div>
      <div className=" ">
        <div className="flex font-lexend justify-between items-center">
          <nav
            className={`text-[13px] lg:mt-0 mt-3 xl:text-[14px] flex flex-col mx-auto py-3 font-medium `}
          >
            {navLinks.map(({ path, pathName, name }) => {
              return (
                <NavLink
                  key={name}
                  to={path}
                  className={`${name === "Shop now" && "cursor-default"} ${
                    location.pathname.length > 1
                      ? location.pathname.split("/")[1] === pathName
                        ? "bg-[#FF6C00] text-white"
                        : "bg-transparent"
                      : location.pathname === path
                        ? "bg-[#FF6C00] text-white"
                        : "bg-transparent"
                  } relative px-3 lg:px-4 py-1.5 lg:py-2 hover:text-white transition duration-200  hover:bg-[#FF6C00] rounded-full`}
                  onClick={() => {
                    name === "Shop now" && setShopNow(!shopNow);
                    setOpenMenu(!openMenu)
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <p>{name}</p>
                    {name === "Shop now" && (
                      <div
                        className={` transition duration-200 ${
                          shopNow ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <MdKeyboardArrowDown />
                      </div>
                    )}
                    {shopNow && name === "Shop now" && (
                      <div
                        onMouseLeave={() => setShopNow(false)}
                        className=" absolute z-40 w-5xl top-[105%] font-lexend text-[15px] left-0"
                      >
                        <div className="px-3 py-4 grid grid-cols-5  rounded-lg bg-[#eeeeee] text-gray-700">
                          {shopMenu.map(({ id, title, items }) => {
                            return (
                              <div key={id}>
                                <div
                                  className={`py-2 rounded-[6px]  ${
                                    location.pathname.split("/")[2] ===
                                    title.toLowerCase().split(" ").join("")
                                      ? " text-[#FF6C00]"
                                      : "  text-gray-700"
                                  }`}
                                >
                                  {title}
                                </div>
                                <div className="mt-3">
                                  {items.map(({ path, name }) => {
                                    return (
                                      <div
                                        key={path}
                                        className={`text-[13px] mt-3 font-normal transition duration-200 hover:text-[#FF6C00] cursor-pointer hover:scale-105 transform hover:translate-x-3 ${
                                          location.pathname.split("/")[3] ===
                                          path.split("/")[1]
                                            ? "text-[#FF6C00] translate-x-3"
                                            : "text-gray-700 translate-x-0"
                                        }`}
                                      >
                                        <Link
                                          to={
                                            "/shop-now/" +
                                            title
                                              .toLowerCase()
                                              .split(" ")
                                              .join("") +
                                            path
                                          }
                                        >
                                          <p>{name}</p>
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ToggleMenu;
