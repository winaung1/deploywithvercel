import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import boy from "../assets/a boy standing  5dc9d970-8c4f-48ab-a215-e490926e192d.png";
export const Registration = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 space-x-20 flex justify-center items-center h-screen">
      <div className="w-1/2  lg:w-[40%]">
        {isLogin ? <SignUp /> : <Login />}
        {isLogin ? (
          <div className="text-sm pb-4 flex items-center space-x-4 justify-between">
            <p>Already have an account?</p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="underline font-semibold"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="text-sm pb-4 flex items-center space-x-4 justify-between">
            <p>Don't have an account?</p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="underline font-semibold"
            >
              Sign up
            </button>
          </div>
        )}
        <div className="flex items-center justify-between space-x-4">
          <hr className="w-full  " />{" "}
          <p className="shrink-0">Login with Others</p>{" "}
          <hr className="w-full" />
        </div>
        <div className="flex my-4 justify-center items-center space-x-1 border rounded-lg p-2">
          <FaGoogle />
          <p>Login with Google</p>
        </div>
        <div className="flex m justify-center items-center space-x-1 border rounded-lg p-2">
          <FaFacebookF />
          <p>Login with Facebook</p>
        </div>
      </div>

      <div className="w-1/2 hidden lg:block">
        <img className="rounded-2xl" src={boy} alt="" />
      </div>
    </div>
  );
};
