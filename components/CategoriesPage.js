import React from 'react'
import Center from './Center'
import styled from 'styled-components';



const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

export default function CategoriesPage() {
  return (
    <div>
     <Center>
     <Title>Categories</Title>
      <div class="">
        <ul class="-m-3.5 flex ">
          <li class="m-3.5 h-52 w-52 bg-white rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white shadow-sm hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/Smq7sZK/2021-11-07-13h26-50.png" alt="" />
            <span class="font-semibold">Fruits & Vegetables</span>
          </li>
          <li class="m-3.5 h-52 w-52 bg-white rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white shadow-sm hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/PwYJkQs/2021-11-07-13h39-41.png" alt="" />
            <span class="font-semibold">Breads & Sweets</span>
          </li>
          <li class="m-3.5 h-52 w-52 bg-white rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white shadow-sm hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/Hx3vbFx/2021-11-07-13h39-52.png" alt="" />
            <span class="font-semibold">Frozen Seafoods</span>
          </li>
          <li class="m-3.5 h-52 w-52 bg-white rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white shadow-sm hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/4PCjhsS/2021-11-07-13h40-02.png" alt="" />
            <span class="font-semibold">Raw Meats</span>
          </li>
          <li class="m-3.5 h-52 w-52 bg-white rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white shadow-sm hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/4PCjhsS/2021-11-07-13h40-02.png" alt="" />
            <span class="font-semibold">Raw Meats</span>
          </li>
        </ul>
      </div>
      </Center>

    </div>
  )
}
