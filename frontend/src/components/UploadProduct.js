import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import productCategory from "../helpers/productCategory";

const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: "",
    description: "",
    price: "",
    selling: "",
  });

  const handleOnChange = (e) => {};

  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">UploadProduct</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>

        <form className="grid p-4 gap-2">
          <label htmlFor="productName">product Name :</label>
          <input
            type="text"
            id="productName"
            placeholder="enter product name"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded "
          />

          <label htmlFor="brandName" className="mt-3">product Name :</label>
          <input
            type="text"
            id="brandName"
            placeholder="enter brand name"
            value={data.brandName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded "
          />


          <label htmlFor="category" className="mt-3">Category :</label>
          <select  value={data.category} className="p-2 bg-slate-100 border rounded">
            {
                productCategory.map((el, index)=> {
                    return (
                    <option value={el.value} key={el.value + index}>{el.label}</option>
                    )
                }

                )
            }
          </select>
          
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
