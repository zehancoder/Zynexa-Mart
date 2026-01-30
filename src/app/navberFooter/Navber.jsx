import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import Container from "../common/Container";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";

function Navber() {
  const [openCate, setOpenCate] = useState(false);
  const [shopNow, setShopNow] = useState(false);

  const categories = [
    { name: "Electronics", pathName: "/shop-now/electronics" },
    {
      name: "Mobiles & Tablets",
      pathName: "/shop-now/electronics/smartphones-tablet",
    },
    {
      name: "Computers & Laptops",
      pathName: "/shop-now/electronics/computers-laptops",
    },
    { name: "Gaming", pathName: "/shop-now/gaming" },
    { name: "Home & Furniture", pathName: "/shop-now/home&furniture" },
    { name: "Men's Fassion", pathName: "/shop-now/fassion/mens-fassion" },
    { name: "Women's Fassion", pathName: "/shop-now/fassion/womens-fassion" },
    { name: "Kids & Baby", pathName: "/shop-now/kids-baby" },
    {
      name: "Beauty & Personal Care",
      pathName: "/shop-now/beauty&personalcare",
    },
    { name: "Health & Wellness", pathName: "/shop-now/health-wellness" },
    { name: "Home & Kitchen", pathName: "/shop-now/home-kitchen" },
    { name: "Furniture", pathName: "/shop-now/furniture" },
    { name: "Sports & Outdoors", pathName: "/shop-now/sports-outdoors" },
    {
      name: "Groceries & Essentials",
      pathName: "/shop-now/groceries-essentials",
    },
    { name: "Tools & Hardware", pathName: "/shop-now/tools-hardware" },
    { name: "Automotive", pathName: "/shop-now/automotive" },
    { name: "Books & Stationery", pathName: "/shop-now/books-stationery" },
    { name: "Pet Supplies", pathName: "/shop-now/pet-supplies" },
    { name: "Jewelry & Watches", pathName: "/shop-now/jewelry-watches" },
    {
      name: "Bags, Shoes & Accessories",
      pathName: "/shop-now/bags-shoes-accessories",
    },
    { name: "Toys & Games", pathName: "/shop-now/toys-games" },
    { name: "Office Supplies", pathName: "/shop-now/office-supplies" },
    { name: "Garden & Outdoors", pathName: "/shop-now/garden-outdoors" },
    { name: "Smart Home Devices", pathName: "/shop-now/smart-home-devices" },
    {
      name: "Gadgets & Accessories",
      pathName: "/shop-now/gadgets-accessories",
    },
    { name: "Music Instruments", pathName: "/shop-now/music-instruments" },
    { name: "Camera & Photography", pathName: "/shop-now/camera-photography" },
    { name: "Art & Crafts", pathName: "/shop-now/art-crafts" },
    { name: "Cleaning Supplies", pathName: "/shop-now/cleaning-supplies" },
  ];

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

  const shopMenu = [
    {
      id: 1,
      title: "Electronics",
      items: [
        { name: "Smartphones & Tablet", path: "/smartphones-tablet" },
        { name: "Computers & Laptops", path: "/computers-laptops" },
        { name: "Headphones & Earbuds", path: "/headphones-earbuds" },
        { name: "Smart Watches", path: "/smart-watches" },
        { name: "Home Appliances", path: "/home-appliances" },
        { name: "Gaming Accessories", path: "/gaming-accessories" },
        { name: "Cameras & Drones", path: "/cameras-drones" },
      ],
    },
    {
      id: 2,
      title: "Fassion",
      items: [
        { name: "Handbags", path: "/handbags" },
        { name: "Shoes", path: "/shoes" },
        { name: "Watches", path: "/watches" },
        { name: "Men Fassion", path: "/mens-fassion" },
        { name: "Women's Fassion", path: "/womens-fassion" },
        { name: "Accessories", path: "/accessories" },
      ],
    },
    {
      id: 3,
      title: "Home & Furniture",
      items: [
        { name: "Sofas & Couches", path: "/sofas-couches" },
        { name: "Bedroom Furniture", path: "/bedroom-furniture" },
        { name: "Kitchen & Dining", path: "/kitchen-dining" },
        { name: "Lighting", path: "/lighting" },
        { name: "Storage Cabinets", path: "/storage-cabinets" },
        { name: "Decor Items", path: "/decor-items" },
      ],
    },
    {
      id: 4,
      title: "Baby & Toys",
      items: [
        { name: "Bath Toys", path: "/bath-toys" },
        { name: "Learning & Stacking Toys", path: "/learning-stacking-toys" },
        { name: "Push & Pull Toys", path: "/push-pull-toys" },
        { name: "Balls", path: "/balls" },
        { name: "Car Seat & Stroller Toys", path: "/car-seat-stroller-toys" },
        { name: "School Backpacks", path: "/school-backpacks" },
      ],
    },
    {
      id: 5,
      title: "Beauty & Personal Care",
      items: [
        { name: "Makeup", path: "/makeup" },
        { name: "Skin Care", path: "/skin-care" },
        { name: "Hair Care", path: "/hair-care" },
        { name: "Tools & Accessories", path: "/tools-accessories" },
        { name: "Personal Care", path: "/personal-care" },
        { name: "Perfumes", path: "/perfumes" },
      ],
    },
  ];

  const location = useLocation();
  const getCartItem = useSelector((state) => state.cartItem);
  const [windowScroll, setWindowScroll] = useState(0)
  useEffect(() => {
    const navber = document.querySelector("#navber");

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) {
        navber.style.backgroundColor = "#282828";
      } else {
        navber.style.backgroundColor = "transparent";
      }
      setWindowScroll(window.scrollY)
    });
  }, [window.scrollY]);

  return (
    <div className="px-0 fixed w-full z-40 transition-all duration-300" id="navber">
      <p className={`text-center font-lexend text-[13px] md:text-[14px] lg:text-[16px] font-medium  text-[#282828] uppercase py-2 ${windowScroll > 0 ? ' hidden' : ' block'}`}>
        Buy for $500 → Free Shipping!
      </p>
      <Container className={" "}>
        <div className={`flex bg-[#282828] rounded-xl ${windowScroll > 0 ? 'py-3' : 'py-7'} px-6 items-center justify-between`}>
          <div>
            <Logo />
          </div>

          <div className=" hidden lg:flex relative items-center h-[42px]  gap-3  rounded-full bg-white w-[60%]">
            <div className="bg-[#eeeeee] relative rounded-l-full h-full flex itece gap-2 px-5 border-r border-gray-300">
              <p
                onClick={() => setOpenCate(!openCate)}
                className="flex font-alan items-center gap-3 font-normal text-[15px] cursor-default  "
              >
                All Categories{" "}
                <MdKeyboardArrowDown
                  className={`font-normal transition duration-200   text-[15px] ${
                    openCate ? "rotate-180" : "rotate-0"
                  }`}
                />
              </p>
              {openCate && (
                <div className="z-40 absolute top-[105%] font-lexend text-[13px] md:text-[14px] lg:text-[15px] left-0">
                  <div className="px-3 py-4 grid grid-cols-2 gap-1 w-[550px] rounded-lg bg-[#eeeeee] text-gray-700">
                    {categories.map(({ pathName, name }) => {
                      return (
                        <Link
                          key={name}
                          to={pathName}
                          onClick={() => setOpenCate(false)}
                        >
                          <div
                            className={`px-3 flex items-center gap-1 py-2 cateRightParent hover:text-white transition duration-200 cursor-pointer rounded-full hover:bg-[#FF6C00]  ${
                              location.pathname === pathName
                                ? "bg-[#FF6C00] text-white"
                                : "bg-transparent text-gray-700 "
                            }`}
                          >
                            <div>{name}</div>
                            <div
                              className={`categoryRight transition duration-300 ${
                                location.pathname === pathName
                                  ? "visible "
                                  : " invisible "
                              }`}
                            >
                              <MdKeyboardArrowRight />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="w-[60%] font-alan">
              <input
                className="text-[15px] w-full border-none outline-none font-normal"
                type="text"
                placeholder="Enter keywords to search..."
              />
            </div>
            <div className="text-[#3a3a3a] cursor-pointer text-[18px] absolute right-0 font-bold px-5">
              <FiSearch />
            </div>
          </div>

          <div className="">
            <div className="flex gap-4 items-center text-white lg:text-[20px]">
              <Link
                to={"/like"}
                className={`${
                  location.pathname.slice(1) === "like"
                    ? "bg-[#FF6C00]"
                    : "bg-transparent"
                } relative hover:bg-[#FF6C00] px-2 py-2 rounded-full transition duration-200 cursor-pointer`}
              >
                <FaRegHeart />
                <div className="bg-[#FF6C00] px-1.5 py-[0.8px] rounded-full absolute -top-1.5 text-[13px] lg:text-sm -right-1.5">
                  0
                </div>
              </Link>

              <Link
                to={"/cart"}
                className={`${
                  location.pathname.slice(1) === "cart"
                    ? "bg-[#FF6C00]"
                    : "bg-transparent"
                } relative hover:bg-[#FF6C00] px-2 py-2 rounded-full transition duration-200 cursor-pointer`}
              >
                <FiShoppingCart />
                <div className="bg-[#FF6C00] px-1.5 py-[0.8px] rounded-full absolute -top-1.5 text-[13px] lg:text-sm -right-1.5">
                  {getCartItem.length}
                </div>
              </Link>

              <Link
                to={"/you"}
                className={`${
                  location.pathname.slice(1) === "you"
                    ? "bg-[#FF6C00]"
                    : "bg-transparent"
                } relative hover:bg-[#FF6C00] lg:block hidden px-2 py-2 rounded-full transition duration-200 cursor-pointer`}
              >
                <FaRegUserCircle />
              </Link>
              <div
                className={`${
                  location.pathname.slice(1) === "menu"
                    ? "bg-[#FF6C00]"
                    : "bg-transparent"
                } relative hover:bg-[#FF6C00] lg:hidden block px-1.5 py-1.5 rounded-full transition text-[21px] duration-200 cursor-pointer`}
              >
                <MdOutlineMenu />
              </div>

              
            </div>
          </div>
        </div>
        <div className=" lg:block hidden">
          <div className="flex font-lexend justify-between items-center">
            <nav className={`text-[13px] xl:text-[14px] flex items-center gap-1.5 xl:gap-4 mx-auto py-3 font-medium ${windowScroll > 0 ? 'text-white' : 'text-gray-700'}`}>
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
                    onClick={() => name === "Shop now" && setShopNow(!shopNow)}
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
            <p className={`text-center text-[14px] font-lexend lg:text-[16px] lg:block hidden font-medium  text-[#282828] uppercase py-2  ${windowScroll > 0 ? ' hidden' : ' block'}`}>
              Buy for $300 → Free Gift!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navber;
