import React from "react";
import Link from "next/link";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);



  return (
    <div className="justify-center items-center flex fixed inset-0">
      

      <div className="modal-2">
        
      <button
        className="border border-2 border-blue-500 text-black active:bg-blue-400 text-md px-6 py-3 rounded-lg shadow hover:shadow-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sign Up Form
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex fixed inset-0 z-50"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
                {/*header*/}



                <div className="container mx-auto py-8">
                <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                  <h1 className="text-center font-bold mb-3">Yutaka Dashboard</h1>
                  <h2 className="text-md mb-6 text-center text-gray-400">Login</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">
                      Email
                    </label>
                    <input 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                       htmlFor="password"
                    >
                      Password
                    </label>
                    <input 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="********"
                    />
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label  htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-blue-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button onClick={() => setShowModal(false)}
                    className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    type="button" 
                    
                  >
                    Login
                  </button>
                  <p className="my-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
                

                
                
              </div>
            </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
      </div>
    </div>
  );
}