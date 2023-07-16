import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';

import { useRouter } from "next/router";
export default function login() {
    const router=  useRouter()
    const handleLogin = async () => {
       router.push("/")
        await signIn('google') 
      }
  
      return (
        <div onClick={handleLogin} className="flex flex-row mt-5  items-center h-screen w-full justify-center">
          {" "}
          <button className="button  text-white bg-[#444444] font-semibold py-[15px] w-[10vw] rounded-full border-[#444444] border">
            Login
          </button>
        </div>
      );
    }