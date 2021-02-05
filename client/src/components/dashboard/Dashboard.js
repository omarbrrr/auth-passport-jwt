import React from "react";

export default function Dashboard() {
  const onLogoutClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mt-20 text-center">
      <p className="mb-12 text-lg">You are currently logged in 👏</p>
      <button
        onClick={onLogoutClick}
        className="block mx-auto py-2 px-8 rounded-lg text-gray-100 bg-indigo-600 hover:bg-indigo-800"
      >
        Logout
      </button>
    </div>
  );
}
