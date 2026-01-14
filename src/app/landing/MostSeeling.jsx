import React from "react";
import Container from "../common/Container";
import Headings1 from "../common/Headings";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../common/ProductCart";
function MostSeeling() {
  const dispatch = useDispatch();
  const geetingMostSellingData = useSelector(
    (state) => state.mostSellingProduct
  );

  console.log(geetingMostSellingData);
  return (
    <div>
      <Container className={'px-0'}>
        <div>
          <div className="flex items-center rounded-lg flex-wrap">
            {geetingMostSellingData.length > 0 &&
              geetingMostSellingData.map(
                ({ id, price, images, title, rating, discountPercentage }) => {
                  return (
                    <div className="w-[50%] sm2:w-[33.33%] md:w-[25%] lg:w-[20%] xl:w-[16.65%] 2xl:w-[12.5%]">
                      <ProductCart
                        itemId={id}
                        className={""}
                        price={price}
                        rating={
                          <div className="flex py-0.5 items-center justify-between gap-1.5 font-medium">
                            <div className="flex items-center gap-0.5">
                              {Array(Math.round(rating))
                                .fill(null)
                                .map(
                                  (item) =>
                                    item === null && (
                                      <div className="w-3">
                                        <img src="/icons/star.png" alt="" />
                                      </div>
                                    )
                                )}
                            </div>
                            <p className="text-gray-500 text-[13px]">
                             <span className="text-gray-500 text-[13px]">Rating</span>: {rating}
                            </p>
                          </div>
                        }
                        img={images[0]}
                        title={title}
                        discountParcent={discountPercentage}
                        discount={
                          <p className="text-[11px] md:text-[12px] text-gray-300 font-alan bg-[#cc0c39] px-1 md:px-1.5 py-0.5 font-medium md:py-1 rounded-lg">
                            {discountPercentage}%
                          </p>
                        }
                      />
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MostSeeling;
