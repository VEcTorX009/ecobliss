import { useRouter } from 'next/router'
import React from 'react'

export default function productDetail() {
    const router= useRouter()
  return (
    <div className="flex flex-col mt-[-10vw] h-[60vw] w-screen" style={{
        backgroundImage: `url("/product.png")`,
        backgroundSize: "100%",
      }} onClick={()=> router.push("/cart")}>
        
      </div>
  )
}
