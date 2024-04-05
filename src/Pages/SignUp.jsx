import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase/Config";
import MyContext from "../Context/MyContext";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loder from "../Componenets/Loder";

const SignUp = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { loading, setloading } = context;
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const signUp = async () => {
    setloading(true);

    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required"), setloading(false);
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(db, "users");
      await addDoc(userRef, user);
      setname("");
      setemail("");
      setname("");
      toast.success("signup sucessfully");
      setloading(false);
      navigate("/login");
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
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            value={name}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            onClick={signUp}
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
