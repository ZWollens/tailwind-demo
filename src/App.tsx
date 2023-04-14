import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gray-500">Tailwind css demo</h1>
      <button className="m-2 rounded-md shadow-sm bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Link to="/login">Link to login</Link>
      </button>
    </>
  );
}

export default App;
