import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import React from 'react'

export default function search() {
  const router= useRouter()
  return (
    <><div className="flex flex-col w-full  h-[145vw]" style={{
      backgroundImage: `url("/searchbg.png")`,
      backgroundSize: "100%"
    }} onClick={()=>router.push("/productDetail") }></div><Footer /></>
  )
}
