import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import { BiSearch } from "react-icons/Bi";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { useRouter } from "next/router";




const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 12;
`;

const Logo = styled(Link)`
`;

const Wrapper = styled.div`

`;
const StyledDiv = styled.div`
`;

const NavLink = styled(Link)`
`;


const SideIcons = styled.div`
  
`;
export default function Header() {
    const {cartProducts} = useContext(CartContext);

    const activeLink = 'flex gap-3 px-4 py-2 bg-blue-700 text-slate-50 rounded-lg';
    const inactiveLink = "flex gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg";
    const router = useRouter();
    const {pathname} = router;

    return(
      
      <div>
      
      <StyledHeader className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md">
          <Center>
              <Wrapper className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Logo href={'/'} className="flex items-center">
                      <img src="https://imgtr.ee/images/2023/11/10/9a7c4ac4d231994e5c7c8a2920fa5fd4.png" class="mr-3 h-6 sm:h-14" alt="Flowbite Logo" />
                      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Yutaka</span>
                    </Logo>
                  <StyledDiv class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col  mt-4 font-semibold text-gray-600 lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                        <NavLink href={'/products'} className={pathname.includes('/products') ? activeLink : inactiveLink}>All Products</NavLink>
                      </li>
                      <li>
                        <NavLink href={'/categories'} className={pathname.includes('/categories') ? activeLink : inactiveLink}>Categories</NavLink>
                      </li>
                      <li>
                        <NavLink href={'/contact'} className={pathname.includes('/contact') ? activeLink : inactiveLink}>Contact</NavLink>
                      </li>
                    
                    </ul>

                  </StyledDiv>





                  <SideIcons className="flex  items-center lg:order-2">

                  <Link  href={'/search'} className="text-xl text-blue-600 bg-blue-100 rounded-full border border-2 border-blue-300 px-2 py-2  mr-4 hover:border-gray-300">
                    <BiSearch/>
                   </Link>
                       <Link  href={'/cart'} className=" relative text-xl text-blue-600 bg-blue-100 rounded-full border border-2 border-blue-300 px-2 py-2  mr-6 hover:border-gray-300">
                        <div class="-top-2 absolute left-6">
                          <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartProducts.length}</p>
                        </div>
                        <AiOutlineShoppingCart/>
                      </Link>




                      
                      <Link  href={'/account'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Your Account
                      </Link>
                  </SideIcons>
              </Wrapper>
          </Center>
      </StyledHeader>
      <div className="w-full h-20"></div>
      </div>
    );
}