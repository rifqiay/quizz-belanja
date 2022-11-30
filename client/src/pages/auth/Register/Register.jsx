import axios from "axios";
import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormV1 from "../../../components/module/Form-1/Form-V1";
import FormV2 from "../../../components/module/Form-2/Form-V2";
import Back from "../../../img/arrow-left.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formV1, setFormV1] = useState(true);
  const [confirmPasword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState("");

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  let confirm = "";
  const matchingPassword = (e) => {
    confirm = e.target.value;
    setConfirmPassword(confirm);
    const password = form.password;
    if (password !== confirm) {
      setIsError("Passwords don't match");
    } else {
      setIsError("");
    }
  };
  useEffect(() => {
    setIsError();
  }, [confirm]);

  const onSubmitForm = (e) => {
    setLoading(true);
    e.preventDefault();
    let password = form.password;
    if (confirmPasword !== password) {
      setLoading(false);
      return;
    }
    axios
      .post(`http://localhost:5000/auth/register`, form)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const handleCloseSetFormV1 = () => {
    setFormV1(false);
  };

  const handleShowSetFormV1 = () => {
    setFormV1(true);
  };

  const toLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex h-screen p-3 sm:justify-center">
        <ToastContainer />
        <section className="max-w-md mx-auto w-full my-auto mx-5 px-5 py-8 border-2 rounded-lg shadow-md ">
          {formV1 ? (
            <h1 className="text-2xl font-semibold text-dark_red">
              Daftar Sekarang
            </h1>
          ) : (
            <div
              className="flex gap-2 cursor-pointer"
              onClick={handleShowSetFormV1}
            >
              <div className="my-auto">
                <img src={Back} alt="back" />
              </div>
              <h1 className="text-2xl font-semibold text-dark_red"> Kembali</h1>
            </div>
          )}
          <div className="mt-7">
            {formV1 ? (
              <FormV1
                onClick={handleCloseSetFormV1}
                onChange={handleChangeForm}
                onSubmit={onSubmitForm}
              />
            ) : (
              <FormV2
                onChange={handleChangeForm}
                onSubmit={onSubmitForm}
                loading={loading}
                Spinner={Spinner}
                matchingPassword={matchingPassword}
                isError={isError}
              />
            )}
            <hr className="border-t-2 my-8 w-4/5 mx-auto" />
            <p className="text-center text-sm font-semibold sm:text-lg">
              Sudah punya akun?{" "}
              <span
                className="text-dark_red cursor-pointer"
                onClick={toLoginPage}
              >
                Masuk
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
