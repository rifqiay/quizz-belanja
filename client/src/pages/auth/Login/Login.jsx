import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/button/Button";
import Input from "../../../components/base/input/Input";
import { Spinner } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", form)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const toRegisterPage = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="flex h-screen p-3 sm:justify-center">
        <ToastContainer />
        <section className="max-w-md mx-auto w-full my-auto mx-5 px-5 py-8 border-2 rounded-lg shadow-md ">
          <h1 className="text-2xl font-semibold text-dark_red">Masuk</h1>
          <div className="mt-7">
            <form onSubmit={onSubmitForm}>
              <div>
                <Input
                  type="text"
                  className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mt-5 relative">
                <Input
                  type={showPassword ? "password" : "text"}
                  className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleChangeForm}
                />
                <p
                  className="absolute top-3 right-5 font-semibold text-dark_red cursor-pointer"
                  onClick={handleShowPassword}
                >
                  Show
                </p>
              </div>

              <p className="mt-5 text-end text-dark_red font-semibold sm:text-lg cursor-pointer">
                Lupa password?
              </p>
              {loading ? (
                <Button
                  className="bg-red-600 hover:bg-red-700 p-3 w-full mt-5 rounded-md text-white "
                  type="submit"
                  title={<Spinner aria-label="Default status example" />}
                />
              ) : (
                <Button
                  className="bg-red-600 hover:bg-red-700 p-3 w-full mt-5 rounded-md text-white "
                  type="submit"
                  title="Masuk"
                />
              )}
            </form>
            <hr className="border-t-2 my-8 w-4/5 mx-auto" />
            <p className="text-center text-sm font-semibold sm:text-lg">
              Belum punya akun?{" "}
              <span
                className="text-dark_red cursor-pointer"
                onClick={toRegisterPage}
              >
                Daftar sekarang
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
