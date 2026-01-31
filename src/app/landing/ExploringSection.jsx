import React, { useEffect, useRef } from "react";
import Container from "../common/Container";
import Headings1 from "../common/Headings";
import { Link } from "react-router";
import Button from "../common/Button";

function ExploringSection() {
  const trendingNow = [
    {
      id: 1,
      name: "Hot Electronics",
      description: "Smartphones, smartwatches, earbuds that are popular",
      pathName: "hot-electronics",
      image:
        "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6825810d9e3038001c81aef3.jpg",
      products: [
        {
          name: "iPhone 15 Pro Max",
          pathName: "iphone-15-pro-max",
        },
        {
          name: "Samsung Galaxy Buds 2 Pro",
          pathName: "samsung-galaxy-buds-2-pro",
        },
        {
          name: "Apple Watch Series 9",
          pathName: "apple-watch-series-9",
        },
        {
          name: "Xiaomi Redmi Note 13 Pro",
          pathName: "xiaomi-redmi-note-13-pro",
        },
        {
          name: "Sony WH-1000XM5 Headphones",
          pathName: "sony-wh-1000xm5-headphones",
        },
        {
          name: "Anker Fast Charging Powerbank 30W",
          pathName: "anker-fast-charging-powerbank-30w",
        },
      ],
    },
    {
      id: 2,
      name: "Fashion Hits",
      description: "Trending clothes, shoes, accessories",
      pathName: "fashion-hits",
      image:
        "https://static.fibre2fashion.com//articleresources/images/103/10203/fashion-small_Small.jpg",
      products: [
        {
          name: "Oversized Cotton T-Shirt",
          pathName: "oversized-cotton-t-shirt",
        },
        {
          name: "Nike Air Force 1 Shoes",
          pathName: "nike-air-force-1-shoes",
        },
        {
          name: "Adidas Classic Backpack",
          pathName: "adidas-classic-backpack",
        },
        {
          name: "Slim Fit Hoodie",
          pathName: "slim-fit-hoodie",
        },
        {
          name: "Casual Denim Jacket",
          pathName: "casual-denim-jacket",
        },
        {
          name: "Ray-Ban Aviator Sunglasses",
          pathName: "ray-ban-aviator-sunglasses",
        },
      ],
    },
    {
      id: 3,
      name: "Top Gadgets & Accessories",
      description: "Latest gadgets people are buying",
      pathName: "top-gadgets-accessories",
      image:
        "https://thumbs.dreamstime.com/b/neatly-arranged-collection-various-modern-gadgets-tech-devices-white-surface-including-drones-cameras-smartphones-356202709.jpg",
      products: [
        {
          name: "MagSafe Wireless Charger",
          pathName: "magsafe-wireless-charger",
        },
        {
          name: "Portable Mini Fan",
          pathName: "portable-mini-fan",
        },
        {
          name: "LED Ring Light",
          pathName: "led-ring-light",
        },
        {
          name: "Bluetooth Smart Tracker",
          pathName: "bluetooth-smart-tracker",
        },
        {
          name: "USB-C Hub 7-in-1",
          pathName: "usb-c-hub-7-in-1",
        },
        {
          name: "Mechanical Gaming Keyboard",
          pathName: "mechanical-gaming-keyboard",
        },
      ],
    },
    {
      id: 4,
      name: "Home & Kitchen Products",
      description: "Items everyone is loving right now",
      pathName: "home-kitchen-popular",
      image:
        "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/marketing-content/site-assets/page-content/pinch-of-help/filling-your-home-with-appliances/Filling-your-home-with-appliances-counter-3.jpg?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1",
      products: [
        {
          name: "Non-stick Frying Pan",
          pathName: "non-stick-frying-pan",
        },
        {
          name: "Electric Kettle 1.8L",
          pathName: "electric-kettle-1-8l",
        },
        {
          name: "Air Fryer Digital",
          pathName: "air-fryer-digital",
        },
        {
          name: "Mini Rice Cooker",
          pathName: "mini-rice-cooker",
        },
        {
          name: "Automatic Water Dispenser",
          pathName: "automatic-water-dispenser",
        },
        {
          name: "Multipurpose Vegetable Chopper",
          pathName: "multipurpose-vegetable-chopper",
        },
      ],
    },
    {
      id: 5,
      name: "Beauty Favorites",
      description: "Skincare and makeup that’s trending",
      pathName: "beauty-favorites",
      image:
        "https://theglamandglitter.com/wp-content/uploads/2024/01/cover-finalleeee-pdf.jpg",
      products: [
        {
          name: "CeraVe Hydrating Cleanser",
          pathName: "cerave-hydrating-cleanser",
        },
        {
          name: "The Ordinary Niacinamide Serum",
          pathName: "the-ordinary-niacinamide-serum",
        },
        {
          name: "Maybelline Fit Me Foundation",
          pathName: "maybelline-fit-me-foundation",
        },
        {
          name: "L'Oréal Paris Mascara",
          pathName: "loreal-paris-mascara",
        },
        {
          name: "NIVEA Soft Moisturizer",
          pathName: "nivea-soft-moisturizer",
        },
        {
          name: "Garnier Vitamin C Serum",
          pathName: "garnier-vitamin-c-serum",
        },
      ],
    },
  ];

  return (
    <div>
      <Container className={""}>
        <div>
          <div>
            <Headings1>Tranding Categories</Headings1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex  md:items-center gap-3 lg:py-3 md:py-2 py-1.5 xl:py-5">
              {trendingNow.map(
                ({ id, description, name, image, products, pathName }) => {
                  return (
                    <div key={id} className="w-[100%] xl:w-[20%] rounded-lg  ">
                      <div className="w-full">
                        <div className="relative viewBtnParent overflow-hidden">
                          <div className="w-full rounded-lg hover:brightness-75  transition duration-300    overflow-hidden  md:h-[180px] h-[170px] lg:h-[190px]">
                            <img
                              className="w-full h-full object-cover "
                              src={image}
                              alt={name}
                            />
                          </div>
                          <Link
                            to={pathName}
                            className="text-center z-30 transition duration-300 viewButton  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
                          >
                            <Button className={"lg:text-[14px]"}>
                              View all
                            </Button>
                          </Link>
                        </div>
                        <div className="font-normal font-lexend text-gray-700 lg:tet-[17px] md:text-[16px] text-[15px] xl:text-[18px] py-2">
                          <h1>{name}</h1>
                        </div>
                        <div className="">
                          {products.map((product) => {
                            return (
                              <Link
                                to={"/" + pathName + "/" + product.pathName}
                              >
                                <p className="font-alan transition duration-300  hover:translate-x-2 transform  font-[300] flex items-center gap-2 mt-0.5 text-[12px] md:text-[13px] lg:text-[14px]">
                                  <div className="h-1 w-1 rounded-full bg-gray-700"></div>
                                  {product.name}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ExploringSection;
