import React from "react";
import { Navbar } from "flowbite-react";
import Input from "../../base/input/Input";
import search from "../../../img/search.png";
import love from "../../../img/heart (1).png";
import bag from "../../../img/shopping-bag.png";
import user from "../../../img/user.png";
import { Dropdown } from "flowbite-react";

const NavbarComponent = ({ setSearch, onClick }) => {
  return (
    <div className="fixed w-full">
      <Navbar fluid={true} rounded={true} border={true}>
        <Navbar.Brand>
          <div className="flex mr-5 w-[32re] sm:hidden">
            <Input
              type="text"
              className="border-0 shadow-md p-2 rounded-l-md w-full text-gray-500 font-normal"
              placeholder="Cari produk"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              className="bg-red-600 py-3 px-5 rounded-r-md cursor-pointer shadow-md"
              onClick={onClick}
            >
              <img src={search} alt="search" />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className=" sm:w-[71rem] sm:flex justify-end">
            <div className="w-[45rem] flex flex-col sm:flex sm:flex-row gap-5">
              <div className="flex mr-5 w-[60%] hidden sm:flex">
                <Input
                  type="text"
                  className="border-0 shadow-md p-2 rounded-l-md w-full text-gray-500 font-normal"
                  placeholder="Cari produk"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div
                  className="bg-red-600 py-3 px-5 rounded-r-md cursor-pointer shadow-md"
                  onClick={onClick}
                >
                  <img src={search} alt="search" />
                </div>
              </div>
              <div className="my-auto">
                <img src={love} alt="love" />
              </div>
              <div className="my-auto">
                <img src={bag} alt="bag" />
              </div>
              <div className="my-auto">
                <img src={user} alt="user" />
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
