import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center py-4">
      <nav className="">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Auth App
        </Link>
      </nav>
    </div>
  );
}
