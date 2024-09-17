import React from "react";
import Image from "next/image";
import Link from "next/link";
import binance_logo from "@/public/binance_logo.png";
import google_logo from "@/public/google_logo.png";
import apple_logo from "@/public/apple_logo.png";

const SignupForm = () => {
  return (
    <div className="grid p-0">
      <div
        className="w-full h-[590px] p-8 justify-center 
      items-center md:w-[430px] border border-gray-700 rounded-[20px]"
      >
        <h1>
          <Image src={binance_logo} width={120} />
        </h1>
        <h1 className="flex justify-between text-3xl py-6">
          Welcome to Binance
        </h1>
        <div className="grid gap-0">
          <label>Email/Phone number</label>
          <input
            type="text"
            className="bg-transparent text-gray-700 border
             border-gray-700 rounded-lg p-3 mt-2"
            placeholder="Email/Phone (without country code)"
          />
        </div>
        <div
          className="w-full h-5 flex mt-5 mb-12 gap-x-2 justify-center
         text-[15px]"
        >
          <input type="checkbox" className="bg-gray-700 appearance-auto" />
          <div className="font-thin">
            By creating an account, I agree to Binance's <u>Terms of Service</u>
            &nbsp; and &nbsp;
            <u>Privacy Policy.</u>
          </div>
        </div>
        <div>
          <button
            href={`/login`}
            className="w-full cursor-pointer mt-auto p-3 bg-yellow-300 text-black border border-yellow-300 rounded-lg hover:opacity-80"
          >
            Next
          </button>
        </div>
        <div className="mt-3 p-5 flex justify-center items-center gap-x-2">
          <span className="h-[0.2px] w-[50%]  bg-gray-700"></span>
          <span className="text-gray-100">or</span>
          <span className="h-[0.1px] w-[50%] bg-gray-700"></span>
        </div>
        <div className="mt-3">
          <div className="flex justify-start gap-x-10 bg-transparent text-white border border-gray-700 rounded-lg p-3 cursor-pointer">
            <div className="w-[15px] h-[15px]">
              <Image src={google_logo} width={20} />
            </div>
            <span>Continue with Google</span>
            <span></span>
          </div>

          <div className="flex justify-start gap-x-10 bg-transparent text-white border border-gray-700 rounded-lg p-3 cursor-pointer mt-4">
            <div className="w-[15px] h-[15px]">
              <Image src={apple_logo} width={20} />
            </div>
            <span>Continue with Apple</span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="flex full justify-center items-center gap-x-1 mt-5">
        {" "}
        <Link
          href={`/signup`}
          className=" text-yellow-500 cursor-pointer hover:text-yellow-400"
        >
          Sign up as an entity
        </Link>
        <span className="text-white">or</span>
        <Link
          href={`/signin`}
          className=" text-yellow-500 cursor-pointer hover:text-yellow-400"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
