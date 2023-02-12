import React from "react";
import { RiAdminLine } from "react-icons/ri";
import { useState } from "react";
import UploadDetails from "./UploadDetails";
import AdminProfile from "./AdminProfile";

const AdminView = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className="flex bg-slate-300 h-screen">
      {/* Left Side */}
      <div className="flex flex-col w-[13rem] justify-around bg-slate-400 text-center rounded-r-md">
        <RiAdminLine className="mt-2 text-[5rem] ml-[3.5rem] border-black border-2 rounded-[2.5rem] p-[0.7rem] " />
        <p className="-mt-[7.7rem] font-serif font-semibold text-sm">
          <p className="hover:text-blue-300 hover:cursor-pointer" onClick={() => setActive("profile")}>
            View Profile
          </p>
        </p>
        <button
          className="font-semibold hover:bg-blue-600 p-[10px] hover:rounded-r-md focus:text-white focus:bg-blue-600 focus:rounded-r-md"
          onClick={() => setActive("upload")}
        >
          Upload Details
        </button>
        <button
          className="font-semibold  hover:bg-blue-600 p-[10px] hover:rounded-r-md focus:text-white focus:bg-blue-600 focus:rounded-r-md"
          onClick={() => setActive("download")}
        >
          Download Details
        </button>
        <button
          className="font-semibold  hover:bg-blue-600 p-[10px] hover:rounded-r-md focus:text-white focus:bg-blue-600 focus:rounded-r-md"
          onClick={() => setActive("statistics")}
        >
          View Statistics
        </button>
      </div>
      {/* Right Side */}
      <div className="mt-[4rem] w-full">
        <div>{active == "profile" && <AdminProfile />}</div>
        <div>{active == "upload" && <UploadDetails />}</div>
        <div>{active == "download" && <downloadDetails />}</div>
        <div>{active == "statistics" && <showStatistics />}</div>
      </div>
    </div>
  );
};

export default AdminView;
