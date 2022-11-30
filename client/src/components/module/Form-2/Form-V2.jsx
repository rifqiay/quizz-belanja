import React, { useState } from "react";
import Input from "../../base/input/Input";
import Button from "../../base/button/Button";

const FormV2 = ({
  onSubmit,
  onChange,
  loading,
  Spinner,
  matchingPassword,
  isError,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleShowConfirmPassword = () => {
    if (showConfirmPassword) {
      setShowConfirmPassword(false);
    } else {
      setShowConfirmPassword(true);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            type="text"
            className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
            placeholder="Nomor Telepon"
            name="phoneNumber"
            onChange={onChange}
          />
        </div>
        <div className="mt-5 relative">
          <Input
            type={showPassword ? "password" : "text"}
            className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
            placeholder="Password"
            name="password"
            onChange={onChange}
          />
          <p
            className="absolute top-3 right-5 font-semibold text-dark_red cursor-pointer"
            onClick={handleShowPassword}
          >
            Show
          </p>
          <p className="mt-2 font-semibold text-red-700">{isError}</p>
        </div>
        <div className="mt-5 relative">
          <Input
            type={showConfirmPassword ? "password" : "text"}
            className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
            placeholder="Konfirmasi Password"
            name="confirmPassword"
            onChange={(e) => matchingPassword(e)}
          />
          <p
            className="absolute top-3 right-5 font-semibold text-dark_red cursor-pointer"
            onClick={handleShowConfirmPassword}
          >
            Show
          </p>
        </div>
        {loading ? (
          <Button
            className="bg-red-600 hover:bg-red-700 p-3 w-full mt-10 rounded-md text-white "
            type="submit"
            title={<Spinner aria-label="Default status example" />}
          />
        ) : (
          <Button
            className="bg-red-600 hover:bg-red-700 p-3 w-full mt-10 rounded-md text-white "
            type="submit"
            title="Selanjutnya"
          />
        )}
      </form>
    </>
  );
};

export default FormV2;
