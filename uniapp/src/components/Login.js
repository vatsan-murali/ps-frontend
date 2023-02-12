import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("ERROR LOGGING IN!");
      setError(data.error)
    } else {
      console.log("LOGGED IN SUCCESSFULLY!");
      setError(null)
      if(data.role === "admin") {
        navigate('/AdminView')
      } else {
        navigate('/')
      }
      window.alert(data.message)
    }
  };


  return (
    <div className="bg-slate-300 h-screen">
      <div className="flex flex-col  justify-center items-center">
        <p className="text-5xl tracking-wide mt-[7rem] font-mono">User Login</p>
        <SlPeople className="text-8xl mt-[4rem] mb-[4.5rem] hover:animate-spin" />
        <form>
          <div className="flex items-center relative">
            <BsFillPersonFill className="ml-2.5 text-[1.7rem] absolute" />
            <input
              type="search"
              name="username"
              value={user.username}
              onChange={handleInputs}
              placeholder="Username"
              className="py-3 px-12"
            />
          </div>
          <div className="flex items-center relative">
            <AiFillLock className="ml-2.5 text-[1.7rem] absolute" />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
              className="my-5 py-3 px-12"
            />
          </div>
          {error && (
            <div className="relative font-semibold text-red-600">
              {error}
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="bg-[#2C133D]/60 py-1 px-[6.5rem] text-white font-semibold text-[2rem] mt-5 hover:bg-[#2C133D]"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
