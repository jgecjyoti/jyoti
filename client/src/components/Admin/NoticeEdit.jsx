import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Store/auth";
const NoticeEdit = () => {
  const {apiUrl,getServices} = useAuth();
  const navigate = useNavigate();
  const [user, setuser] = useState({
    url: "",
    title: "",
    date: "",
  });
  const id = useParams();
  const getSingleNotice = async () => {
    const response = await fetch(
      `${apiUrl}/api/admin/servicelist/${id.id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setuser(data);
    }
  };

  useEffect(() => {
    getSingleNotice();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${apiUrl}/api/admin/servicelist/update/${id.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
        navigate("/admin/notices");
        getServices();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div className=" flex justify-center  bg-gray-300 py-14  lg:px-5 lg:py-5">
        <div className="bg-gray-100 lg:w-[40%]  text-gray-500 rounded-3xl shadow-xl  overflow-hidden ">
          <div className="">
            
            <div className=" py-10 ">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">User Details</h1>
                
              </div>
              <form className="px-8" onSubmit={handlesubmit}>
              <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      URL
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        name="url"
                        onChange={handleinput}
                        value={user.url}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Title
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        name="title"
                        onChange={handleinput}
                        value={user.title}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Date
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="date"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        name="date"
                        onChange={handleinput}
                        value={user.date}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeEdit;
