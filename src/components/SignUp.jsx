import React from 'react'
import { CiUser } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';

export const SignUp = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-7xl font-semibold">Welcome</h1>
        <p className="text-md font-light">
          We are glad to see you back with us
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
