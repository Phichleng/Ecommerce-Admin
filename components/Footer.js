import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/Bs'


export default function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900 mt-16 shadow-[0_0px_60px_0px_rgba(0,0,0,0.1)]">
    <div class="container px-6 py-8 mx-auto">
        <div class="flex flex-col items-center text-center">
            <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Follow On</p>

            <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">


                <a href={'https://www.facebook.com/Yutakacambodia'} target="_blank" class="px-4 py-4 tracking-wide text-2xl text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-full sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"><BsFacebook/></a>
                <a href={'/'} class="px-4 py-4 tracking-wide text-2xl text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-full sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"><BsInstagram/></a>
                <a href={'/'} class="px-4 py-4 tracking-wide text-2xl text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-full sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"><BsTiktok/></a>
            </div>
        </div>

        <hr class="my-10 border-gray-200 dark:border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500">©2023 Yutaka . All Rights Reserved.</p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy  </a>
                
                <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Refunds  </a>


                <a href={'/contact'} class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Contacts </a>
            </div>
        </div>
    </div>
</footer>
  )
}
