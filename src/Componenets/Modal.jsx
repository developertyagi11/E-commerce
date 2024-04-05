import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Firebase/Config";
import { toast } from "react-toastify";

const Modal = ({ showmodal, setshowmodal ,del}) => {
  const [orderinfo, setorderinfo] = useState({
    name: "",
    address: "",
    pincode: "",
    phonenumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
  });
  console.log(orderinfo);

  const buynow = async () => {
    if (
      orderinfo.name === "" ||
      orderinfo.address == "" ||
      orderinfo.pincode == "" ||
      orderinfo.phoneumber == ""
    ) {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    try {
      const orderRef = collection(db, "orders");
      await addDoc(orderRef, orderinfo);
      toast.success("data send");
      setTimeout(() => {
        setshowmodal(false)
      }, 100);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className={`${
          showmodal ? "fixed inset-0 backdrop-blur-sm  bg-opacity-30" : ""
        }`}
      >
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center  justify-center p-4 text-center">
            <div className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">
              <section>
                <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                  <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <div
                        className="flex justify-end  cursor-pointer text-lg"
                        onClick={() => setshowmodal(false)}
                      >
                        &times;
                      </div>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Enter Full Name
                          </label>
                          <input
                            type="name"
                            name="name"
                            id="name"
                            value={orderinfo.name}
                            onChange={(e) =>
                              setorderinfo({
                                ...orderinfo,
                                name: e.target.value,
                              })
                            }
                            className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Enter Full Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            value={orderinfo.address}
                            onChange={(e) =>
                              setorderinfo({
                                ...orderinfo,
                                address: e.target.value,
                              })
                            }
                            className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="pincode"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Enter Pincode
                          </label>
                          <input
                            type="text"
                            name="pincode"
                            id="pincode"
                            value={orderinfo.pincode}
                            onChange={(e) =>
                              setorderinfo({
                                ...orderinfo,
                                pincode: e.target.value,
                              })
                            }
                            className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="mobileNumber"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Enter Mobile Number
                          </label>
                          <input
                            type="text"
                            name="mobileNumber"
                            id="mobileNumber"
                            value={orderinfo.phonenumber}
                            onChange={(e) =>
                              setorderinfo({
                                ...orderinfo,
                                phonenumber: e.target.value,
                              })
                            }
                            className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                          />
                        </div>
                      </form>
                      <button
                        onClick={buynow}
                        type="button"
                        className="focus:outline-none w-full text-white bg-violet-600  hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
