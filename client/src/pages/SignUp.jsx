import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 m max-w-sm mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
        disabled:opacity-80  "
        >
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account ? </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
