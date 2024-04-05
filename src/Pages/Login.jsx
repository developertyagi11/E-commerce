import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Config";
import MyContext from "../Context/MyContext";
import Loder from "../Componenets/Loder";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const context = useContext(MyContext);
  const { loading, setloading } = context;
  const navigate = useNavigate();

  const signIn = async () => {
    setloading(true);
    if (email === "" || password === "") {
      return toast.error("All Field Are Required");
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("succesfull login");
      localStorage.setItem("user", JSON.stringify(result)); // jis id se login karenge use bhej rahe hain om localstorage in string form
      navigate("/");
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loder />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            onClick={signIn}
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
