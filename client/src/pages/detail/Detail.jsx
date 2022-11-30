import axios from "axios";
import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/base/button/Button";
import Card from "../../components/module/Card/Card";
import NavbarComponent from "../../components/module/Navbar";
import Check from "../../img/check.png";
import Heart from "../../img/heart.png";
import Start from "../../img/start.png";

const Detail = () => {
  const navigate = useNavigate();
  const [deskripsi, setDeskripsi] = useState(true);
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const { id } = useParams();

  const getData = () => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setDatas(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setData(res.data.data[0]))
      .catch((err) => console.log(err));
    getData();
  }, [id]);

  const toProductDetail = (idProduct) => {
    navigate(`/${idProduct}`);
  };

  const handleShowDeskripsi = () => {
    setDeskripsi(true);
  };
  const handleCloseDeskripsi = () => {
    setDeskripsi(false);
  };
  return (
    <div className="container">
      <NavbarComponent />
      <div className="bg-slate-300">
        <div className="pt-[70px] ml-20">
          <Dropdown label="BELANJA" dismissOnClick={false}></Dropdown>
        </div>
      </div>
      <div className="p-2 ">
        <div className="sm:flex">
          <section className="sm:w-1/3">
            <div className="border-2 rounded-lg shadow-md bg-slate-300 ">
              <img src={data?.photo} alt="products" className="w-full" />
            </div>
            <div className="mt-3 flex gap-3 overflow-scroll overflow-y-hidden">
              <img
                src={data?.photo}
                alt="thumbnail"
                className="w-28 border-2 rounded-xl"
              />
              <img
                src={data?.photo}
                alt="thumbnail"
                className="w-28 border-2 rounded-xl"
              />
              <img
                src={data?.photo}
                alt="thumbnail"
                className="w-28 border-2 rounded-xl"
              />
              <img
                src={data?.photo}
                alt="thumbnail"
                className="w-28 border-2 rounded-xl"
              />
            </div>
          </section>
          <section className="sm:w-1/2 sm:ml-10">
            <div className="mt-3">
              <h1 className="text-2xl font-semibold uppercase">{data?.nama}</h1>
              <h5 className="text-lg mt-3 font-semibold">{data?.toko}</h5>
              <img src={Start} alt="start" className="mt-1" />
              <div className="flex justify-between">
                <p className="mt-3 text-red-600 text-lg font-bold">
                  {data?.price}
                </p>
                <div className="flex">
                  <div className="my-auto mr-1">
                    <img src={Check} alt="check" />
                  </div>
                  <p className="my-auto text-blue-500 font-semibold">
                    Tersedia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-5 sm:relative">
              <div className="flex gap-1">
                <p className="p-2 border-2">➕</p>
                <div className="w-12 box-border ">
                  <p className="py-2 border-2 h-14 text-center my-auto">100</p>
                </div>
                <p className="p-2 border-2">➖</p>
              </div>
              <Button
                title="TAMBAH KE KERANJANG"
                className="bg-red-600 p-3 text-white font-semibold rounded-md"
              />
              <div className="mt-5 flex justify-end sm:block sm:mt-0 sm:absolute sm:right-0">
                <img src={Heart} alt="heart" className="border-2 p-2" />
              </div>
            </div>
            <div>
              <p className="text-lg mt-1">{data?.informasi}</p>
            </div>
          </section>
        </div>
        <section>
          <div className="flex justify-center gap-4 mt-3">
            <h1
              className="text-slate-600 text-xl font-semibold cursor-pointer"
              onClick={handleShowDeskripsi}
            >
              Deskripsi
            </h1>
            <h1
              className="text-slate-600 text-xl font-semibold cursor-pointer"
              onClick={handleCloseDeskripsi}
            >
              Informasi
            </h1>
          </div>
          {deskripsi ? (
            <>
              <p className="text-lg mt-1">{data?.deskripsi}</p>
            </>
          ) : (
            <>
              <p className="text-lg mt-1">{data?.informasi}</p>
            </>
          )}
        </section>
        <section>
          <h1 className="mt-5 text-center text-xl font-bold text-slate-500 uppercase sm:mt-12">
            Rekomendasi untuk anda
          </h1>
          <hr className="border-t-4 border-t-red-700 mt-1 w-1/2 mx-auto sm:w-1/6" />
          <div className="mt-5 flex flex-wrap gap-3">
            {datas.map((item, index) => (
              <Card
                key={index}
                onclick={() => toProductDetail(item.id)}
                nama={item?.nama}
                photo={item?.photo}
                toko={item?.toko}
                price={item?.price}
              />
            ))}
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Detail;
