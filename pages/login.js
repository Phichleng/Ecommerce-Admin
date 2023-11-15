import React from 'react'

export default function login() {

  return (

<div>

<div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
  

<div class="flex shadow-md">

  <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white w-full">
    <div class="w-72">

      <h1 class="text-xl font-semibold">Welcome back</h1>
      <small class="text-gray-400">Welcome back! Please enter your details</small>


      <form class="mt-4">
        <div class="mb-3">
          <label class="mb-2 block text-xs font-semibold">Email</label>
          <input type="email" placeholder="Enter your email" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
        </div>

        <div class="mb-3">
          <label class="mb-2 block text-xs font-semibold">Password</label>
          <input type="password" placeholder="*****" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
        </div>

        <div class="mb-3 flex flex-wrap content-center">
          <input id="remember" type="checkbox" class="mr-1 checked:bg-purple-700" /> <label for="remember" class="mr-auto text-xs font-semibold">Remember for 30 days</label>
          <a href="#" class="text-xs font-semibold text-purple-700">Forgot password?</a>
        </div>

        <div class="mb-3">
          <button class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
          <button class="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
            <img class="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
            Sign in with Google
          </button>
        </div>
      </form>


      <div class="text-center">
        <span class="text-xs text-gray-400 font-semibold">Dont have account?</span>
        <a href="#" class="text-xs font-semibold text-purple-700">Sign up</a>
      </div>
    </div>
  </div>


  <div class="flex flex-wrap content-center justify-center rounded-r-md w-full">
    <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg"/>
  </div>

</div>
</div>


</div>
  )
}
