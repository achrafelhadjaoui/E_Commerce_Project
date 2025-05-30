import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import summaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {

  const [openUploadProduct, setOpenUplaodPoduct] = useState(false)
  const [allProduct, setAllProduct] = useState([])

  const fetchAllProduct = async () =>{
    const response = await fetch(summaryApi.allProduct.url)
    const dataResponse = await response.json()

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  }, [])

  return (
    <div>
    <div className='bg-white py-2 px-4 flex justify-between items-center'>
      <h2 className='font-bold text-lg'>AllProducts</h2>
      <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>{setOpenUplaodPoduct(true)}}>upload Poduct</button>
    </div>

    {/**all product */}
    <div className='flex items-center gap-5 py-4'>
      {
        allProduct?.map((product, index) => {
          return(
            <AdminProductCard data={product} key={index+"allProduct"}/>
            
          )
        })
      }
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