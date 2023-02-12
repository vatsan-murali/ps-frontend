import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    console.log(res);
    if (res.status === 422 || !data) {
      console.log("INVALID");
      setError(data.error);
    } else {
      console.log("REGISTERED SUCCESSFULLY!");
      setError(null);
      navigate("/login");
      window.alert(data.message);
    }
  };

  return (
    <div className="bg-slate-300 h-screen">
      <div className="flex flex-col  justify-center items-center">
        <p className="text-5xl tracking-wide mt-[7rem] font-mono">
          User Sign Up
        </p>
        <SlPeople className="text-8xl mt-[4rem] mb-[4.5rem] text-center hover:animate-spin" />
        <div className="flex items-center relative">
          <BsFillPersonFill className="ml-2.5 text-[1.7rem] absolute" />
          <input
            onChange={handleInput}
            name="username"
            value={user.username}
            type="text"
            placeholder="Username"
            className="my-5 py-3 px-12"
          />
        </div>
        <div className="flex items-center relative">
          <BsFillPersonFill className="ml-2.5 text-[1.7rem] absolute" />
          <input
            onChange={handleInput}
            name="email"
            value={user.email}
            type="text"
            placeholder="Email"
            className="py-3 px-12"
          />
        </div>
        <div className="flex items-center relative">
          <AiFillLock className="ml-2.5 text-[1.7rem] absolute" />
          <input
            onChange={handleInput}
            name="password"
            value={user.password}
            type="password"
            placeholder="Password"
            className="my-5 py-3 px-12"
          />
        </div>
        <div className="flex items-center relative">
          <BsShieldLockFill className="ml-2.5 text-[1.5rem] absolute" />
          <input
            onChange={handleInput}
            name="cpassword"
            value={user.cpassword}
            type="password"
            placeholder="Confirm Password..."
            className="py-3 px-12"
          />
        </div>
        {error && (
          <div className="relative mt-2 font-semibold text-red-600">
            {error}
          </div>
        )}
        <button
          onClick={handleSubmit}
          className="bg-[#2C133D]/60 py-1 px-[5.5rem] text-white font-semibold text-[2rem] mt-6 hover:bg-[#2C133D]"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignUp;
