import React from "react";
import Start from "../../../img/start.png";

const Card = ({ key, onclick, nama, photo, toko, price }) => {
  return (
    <>
      <div className="flex gap-4 sm:gap-2 sm:p-3 flex-wrap" key={key}>
        <div
          className="border-2 px-1 py-2 w-44 sm:w-64 rounded-lg shadow-md hover:shadow-xl cursor-pointer"
          onClick={onclick}
        >
          <div className="flex justify-center">
            <img
              src={photo}
              alt="product1"
              className="w-32 h-28 sm:w-64 sm:h-52"
            />
          </div>
          <div>
            <h1 className="uppercase font-bold text-gray-400 text-sm text-center ">
              {nama}
            </h1>
            <h1 className="uppercase text-gray-400 text-center text-sm my-1">
              {toko}
            </h1>
            <div className="flex justify-center mt-2">
              <img src={Start} alt="start" />
            </div>
            <p className="text-red-600 text-sm mt-2 text-center font-semibold">
              {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
