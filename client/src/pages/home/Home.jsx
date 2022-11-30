import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Accordions from "../../components/module/Accordion/Accordion";
import Card from "../../components/module/Card/Card";
import NavbarComponent from "../../components/module/Navbar";
import { Dropdown } from "flowbite-react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const getData = () => {
    axios
      .get(`http://localhost:5000/products?search=${search}&sort=${value}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [value]);

  const handleSearch = () => {
    getData(search);
  };

  const toProductDetail = (id) => {
    navigate(`/${id}`);
  };

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <NavbarComponent setSearch={setSearch} onClick={handleSearch} />
      <div className="bg-slate-300">
        <div className="pt-[70px] ml-20">
          <Dropdown label="BELANJA" dismissOnClick={false}></Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 -mt-3">
        <div className="mt-4">
          <Accordions data={data} />
        </div>
        <div className="col-span-3 ">
          <div className="flex justify-between mt-5">
            <h4 className="mt-7 font-semibold text-lg ml-4">
              Menampilkan <span className="bg-gray-300 px-3">{endOffset}</span>{" "}
              dari {data.length}
            </h4>
            <div className="flex gap-3">
              <h3 className="my-auto font-semibold">Urutkan</h3>
              <select
                className="relative mr-20 h-9 border-0 top-[10px] bg-gray-200 font-semibold"
                onChange={(e) => setValue(e.target.value)}
              >
                <option>Nama produk :</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
          </div>
          <div className=" flex flex-wrap">
            {data.length === 0 ? (
              <h1 className="mx-auto my-10 text-5xl font-semibold uppercase underline text-red-600">
                data tidak ditemukan
              </h1>
            ) : (
              currentItems.map((item, index) => (
                <Card
                  key={index}
                  onclick={() => toProductDetail(item.id)}
                  nama={item?.nama}
                  photo={item?.photo}
                  toko={item?.toko}
                  price={item?.price}
                />
              ))
            )}
          </div>
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
