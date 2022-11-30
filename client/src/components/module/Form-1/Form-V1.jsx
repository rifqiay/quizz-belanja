import React from "react";
import Input from "../../base/input/Input";
import Button from "../../base/button/Button";

const FormV1 = ({ onClick, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            type="text"
            className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
            placeholder="Nama Depan"
            name="firstname"
            required
            onChange={onChange}
          />
        </div>
        <div className="mt-5">
          <Input
            type="text"
            className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
            placeholder="Nama Belakang"
            name="lastname"
            onChange={onChange}
          />
        </div>
        <div className="mt-5">
          <Input
            type="email"
            className="w-full p-3 rounded-md shadow-md border-2 focus:outline-none"
            placeholder="Email"
            name="email"
            onChange={onChange}
          />
        </div>
        <Button
          className="bg-red-600 hover:bg-red-700 p-3 w-full mt-10 rounded-md text-white "
          type="button"
          title="Selanjutnya"
          onClick={onClick}
        />
      </form>
    </>
  );
};

export default FormV1;
