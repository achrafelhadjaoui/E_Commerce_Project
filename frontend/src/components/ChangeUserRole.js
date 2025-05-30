import React, { useState } from "react";
import ROLE from "../common/role";
import {IoMdClose} from 'react-icons/io'
import summaryApi from "../common";
import { toast } from "react-toastify";

const ChangeUserRole = ({
  name,
  email,
  userId,
  role,
  onClose,
  callFunc
}) => {

  const [userRole, setUserRole] = useState(role || "");

  const handleOnchangeSelect = (e) => {
    setUserRole(e.target.value)
    
  }

  const updateUserRole = async () => {
    const fetchResponse = await fetch(summaryApi.updateUser.url, {
      method: summaryApi.updateUser.method,
      credentials: "include",
      headers : {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        role : userRole
      })
    })

    const dataResponse = await fetchResponse.json()
    if(dataResponse.success){
      toast.success(dataResponse.message)
      onClose()
      callFunc()
    }
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">

        <button className="block ml-auto " onClick={onClose}>
          <IoMdClose/>
        </button>

        <h1 className="pb-4 text-lg font-medium">ChangeUserRole</h1>

        <p>Name : {name}</p>
        <p>Email : {email}</p>

        <div className="flex items-center justify-between my-4">
          <p>Role :</p>
          <select className="border px-4 py-1 " value={userRole} onChange={handleOnchangeSelect}>
            {Object.values(ROLE).map((el) => {
              console.log("this is el", el)
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button className="w-fit mx-auto block py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700" onClick={updateUserRole}>Change Role</button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
