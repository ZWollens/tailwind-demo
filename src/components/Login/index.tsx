import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h1>
        <form
          action=""
          className="max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Alex"
              />
            </label>
          </div>
          <div className="mb-4">
            <label
              className=" block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
              <input
                type="text"
                placeholder="Alex@example.com"
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </label>
          </div>
          <div className="mb-4">
            <label
              className=" block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Password
              <input
                type="text"
                placeholder="******"
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </label>
          </div>
          <div className="mb-4">
            <label
              className=" block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Confirm Password
              <input
                type="text"
                placeholder="******"
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button className="grid rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2.5 text-sm font-bold">
              <Link to="/" className="items-center">
                Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
