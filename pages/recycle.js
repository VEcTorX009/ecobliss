import Footer from '@/components/Footer'
import React from 'react'

export default function recycle() {
  return (
    <><div className="flex flex-col w-screen h-screen" style={{
          backgroundImage: `url("/recycle.png")`,
          backgroundSize: "100%"
      }}></div><Footer /></>
  )
}
