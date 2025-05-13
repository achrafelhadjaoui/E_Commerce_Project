import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {

  const [openUploadProduct, setOpenUplaodPoduct] = useState(false)

  return (
    <div>
    <div className='bg-white py-2 px-4 flex justify-between items-center'>
      <h2 className='font-bold text-lg'>AllProducts</h2>
      <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>{setOpenUplaodPoduct(true)}}>upload Poduct</button>
    </div>

    {/**upload product component */}
    {
      openUploadProduct && (
        <UploadProduct onClose={()=>{setOpenUplaodPoduct(false)}}/>
      )
    }

    </div>
  )
}

export default AllProducts