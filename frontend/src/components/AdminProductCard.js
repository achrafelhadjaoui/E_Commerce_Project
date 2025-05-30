import React, { useState } from "react";
import {MdModeEditOutline} from "react-icons/md"
import AdminEditProduct from "./AdminEditProduct";

const AdminProductCard = ({data}) => {

  const [editProduct, setEditProduct] = useState(false)

  return (
    <div className="bg-white p-4 rounded">
      <div className="w-24 h-24">
      <img src={data?.productImage[0]} alt={data?.productName} className="w-full h-full object-cover" />
      </div>
      <h1>{data?.productName}</h1>

      <div className="w-fit ml-auto bg-green-100 hover:bg-green-600 p-2 rounded-full hover:text-white cursor-pointer" onClick={()=>setEditProduct(true)}>
        <MdModeEditOutline />
      </div>


      {
        editProduct && (<AdminEditProduct productData={data} onClose={()=>setEditProduct(false)}/>)
      }
      
    </div>
  );
};

export default AdminProductCard;



// import React from "react";
// import { MdModeEditOutline } from "react-icons/md";

// const AdminProductCard = ({ data, onEdit }) => {
//   return (
//     <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl p-4 flex gap-4 items-start relative">
//       {/* Product Image */}
//       <div className="w-24 h-24 flex-shrink-0 rounded-lg  bg-gray-100">
//         <img
//           src={data?.productImage?.[0]}
//           alt={data?.productName}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex-1 space-y-2">
//         <h2 className="text-lg font-semibold text-gray-800">
//           {data?.productName}
//         </h2>
//         <p className="text-sm text-gray-500">{data?.category}</p>
//         <p className="text-base font-medium text-green-700">
//           ${data?.price?.toFixed(2)}
//         </p>
//       </div>

//       {/* Edit Button */}
//       <button
//         onClick={() => onEdit?.(data)}
//         className="absolute top-3 right-3 p-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-sm"
//       >
//         <MdModeEditOutline size={18} />
//       </button>
//     </div>
//   );
// };

// export default AdminProductCard;
