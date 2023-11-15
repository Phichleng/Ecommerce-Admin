
import React from 'react'
import Link from "next/link";
import {useState} from "react";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";
import { MdAddShoppingCart } from 'react-icons/Md';
import styled from 'styled-components';
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";

const BigImage = styled.img`
    margin: 0 auto;
    height: 250px;
    min-width: 250px;
    object-fit: cover;
    border-radius: 10px;
`;


const WishlistButton = styled.button`
  width: 40px !important;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  ${props => props.wished ? `
    color: #D2042D;
  ` : `
    color:#696969;
  `}
  svg{
    font-size: 32px;
    background: white;
    padding: 3px;
    border-radius: 100%;
    transition: 0.3s;
    &:hover {
      scale: 1.1;
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }
  }
`;


export default function ProductBox({_id,title,description,price,stock,images,wished=false, onRemoveFromWishlist =()=>{},}) {
  const url = '/product/'+_id;
  const [isWished,setIsWished] = useState(wished);
  function addToWishlist(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      const nextValue = !isWished;
      if (nextValue === false && onRemoveFromWishlist) {
          onRemoveFromWishlist(_id);
      }
      axios.post('/api/wishlist',{
          product: _id,
      }).then(() => {});
      setIsWished(nextValue);
  }
  return (


    <div class="max-w-2xl mx-auto h-100">
    
    
      <div class="relative bg-white shadow-sm rounded-lg max-w-sm hover:shadow-2xl duration-500">
        <Link href={url}>





              <WishlistButton wished={isWished} onClick={addToWishlist}>
                  {isWished ? <IoHeartCircleSharp /> : <IoHeartCircleOutline />}
              </WishlistButton>
              <BigImage className='' src={images?.[0]} alt=""/>


          
            </Link>
          <div class="px-4 pb-4">
            <a href={url}>
              <h3 class="text-gray-600 font-sm text-md mt-2">{title}</h3>
            </a>
            <div class="flex items-center mt-2. mb-2">
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>

              <span class=" text-yellow-400 text-xs font-sm ml-1">5.0</span>
              <span class=" text-gray-500 text-xs font-sm ml-2 ">( {stock} In Stock )</span>
            </div>
            <div class="flex items-center justify-between -mt-2">
              <span class="text-lg font-bold text-gray-900 dark:text-white">${price}</span>
              
              <FlyingButton class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" _id={_id} src={images?.[0]} ><MdAddShoppingCart/></FlyingButton>
              
            </div>

          </div>
      </div>
    </div>


  )
}