import React from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

export const Login = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-7xl font-semibold">Login</h1>
        <p className="text-md font-light">
          Login to get access to our services
        </p>
      </div>
      <form>
        <div className=" my-4 flex items-center space-x-1 px-2 bg-gray-200 rounded-lg">
          <CiUser className="text-xl" />
          <input
            className="py-2 bg-transparent w-full outline-none"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center space-x-1 px-2 bg-gray-200 rounded-lg">
          <RiLockPasswordLine className="text-xl" />
          <input
            className="py-2 bg-transparent w-full outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="my-4 bg-black text-white w-full p-2 rounded-lg">
          Login
        </button>
      </form>
      
    </div>
  );
};
