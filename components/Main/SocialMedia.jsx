import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {toast } from 'react-toastify';

export default function SocialMedia({setIsloading}) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const handlemore = (e) => {
    router.push(`/shop/${e}`);
  };
  const handlelike = async (productId) => {
    toast.success('You liked the post!');

    try {
      const response = await fetch(`/api/products/${productId}/like`, {
        method: "PUT",
      });
      if (response.ok) {
        // Product rating updated successfully, you can update the UI as needed
        // For example, you can fetch the updated products again
        fetchProducts()
      } else {
        // Handle error response
        console.error("Failed to update product rating");
      }
    } catch (error) {
      console.error("Failed to update product rating:", error);
    }
  };
const fetchProducts = async () => {
  try {
      const response2 = await fetch("/api/profile");
      const data2 = await response2.json();
      const response = await fetch("/api/products");
      const data = await response.json();
      setUsers(data2);
      setProducts(data);
      setIsloading(false);
      
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};
  useEffect(() => {
    const fetchProducts = async () => {
      try {
          const response2 = await fetch("/api/profile");
          const data2 = await response2.json();
          const response = await fetch("/api/products");
          const data = await response.json();
          setUsers(data2);
          setProducts(data);
          setIsloading(false);
          
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-row mb-[10vw]  items-center h-screen w-screen mt-[45vw] text-black">
     
          <div className="flex p-8 flex-col mt-[15vw]">
            {products.map((product) => (
              <div key={product.id} className="p-5  flex gap-12 flex-row">
                <div className="flex  w-[55vw] h-[20vw]">
                  <Image width={500} height={500} src={product.image} />
                </div>
                <div className="flex gap-y-5 flex-col">
                  <h2 className="text-4xl">{product.title}</h2>
                  <h3 className="text-2xl">Seller - {product.seller}</h3>
                  <p className="text-xl">{product.description}</p>
                  <div className="flex gap-x-5 flex-row">
                    <button
                      onClick={() => handlemore(product._id)}
                      className="button  text-white bg-[#444444] font-semibold py-[15px] w-[10vw] rounded-full border-[#444444] border"
                    >
                      More
                    </button>
                    <svg
                      onClick={() => handlelike(product._id)}
                      width="52"
                      className={` cursor-pointer `}
                      height="52"
                      viewBox="0 0 52 52"
                      color="red"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                      color="red"
                      stroke="red"
                      fill="red"
                        d="M32.6964 14.5C29.9308 14.5 27.5094 15.7028 26 17.7359C24.4906 15.7028 22.0692 14.5 19.3036 14.5C17.1021 14.5025 14.9915 15.3881 13.4348 16.9624C11.8781 18.5368 11.0025 20.6713 11 22.8978C11 32.3792 24.9004 40.0537 25.4924 40.3707C25.6484 40.4556 25.8228 40.5 26 40.5C26.1772 40.5 26.3516 40.4556 26.5076 40.3707C27.0996 40.0537 41 32.3792 41 22.8978C40.9975 20.6713 40.1219 18.5368 38.5652 16.9624C37.0085 15.3881 34.8979 14.5025 32.6964 14.5ZM26 38.1764C23.5545 36.7352 13.1429 30.17 13.1429 22.8978C13.145 21.246 13.7947 19.6625 14.9496 18.4945C16.1045 17.3265 17.6703 16.6693 19.3036 16.6672C21.9085 16.6672 24.0955 18.0704 25.0089 20.3243C25.0897 20.523 25.227 20.693 25.4034 20.8126C25.5799 20.9323 25.7876 20.9962 26 20.9962C26.2124 20.9962 26.4201 20.9323 26.5966 20.8126C26.773 20.693 26.9103 20.523 26.9911 20.3243C27.9045 18.0664 30.0915 16.6672 32.6964 16.6672C34.3297 16.6693 35.8955 17.3265 37.0504 18.4945C38.2053 19.6625 38.855 21.246 38.8571 22.8978C38.8571 30.1592 28.4429 36.7339 26 38.1764Z"
                      
                      />
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
      <div className="flex flex-col text-center  bg-[#F2E9E2] border-3xl mt-[12vw] overflow-y-auto p-5 w-full">
        <h2 className="text-4xl py-5 font-semibold">Most Popular</h2>
        {users.map((user) => {
            return(

          <div key={users.id} className="flex gap-y-3 p-4 text-xl flex-col  items-center">
            <Image
              className="rounded-full"
              src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"}
              width={150}
              height={150}
            />
            <h3 className="text-2xl">{user.name}</h3>
            <h3>Category - {user.category}</h3>
            <h3>Products Sold - {user.sales}+</h3>
            <h3>Happy custumers - {user.customers}+</h3>
          </div>
            )
        })}
      </div>
    </div>
  );
}
