import React, { useEffect, useState } from 'react'
import SocialMedia from "../components/Main/SocialMedia"
import Footer from "../components/Footer"
import Load from '@/components/Loader'
export default function social() {
  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 6000);
  }, [])
  
  
  return (
    <>
    
    {isloading && <Load/>}
    <div className='mt-[-52vw]'>
      <SocialMedia />
      <Footer />
    </div></>
  )
}
