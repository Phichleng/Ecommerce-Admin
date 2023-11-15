import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

const request = {
    isLoading: false,
    data: null,
    error: null
}

const LoginPage = () => {

    const [state,setState] = useState(request)

    const [body, setBody] = useState({
        email: "",
        password: ""
    });

    const router = useRouter()

    const handleChange = (e) => {
        setBody(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async () => {
        setState(prev => ({...prev, isLoading: true}))
        axios.post("/api/signin", body).then((res) => {
            setState(prev => ({...prev,data: res?.data, isLoading: false}))
            router.push("/");
        }).catch(err => {
            setState(prev => ({
                ...prev,
                error: err
            }))
        })
    }
  return (
    <div className="container mx-auto py-8">
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-center font-bold mb-3">Yutaka Dashboard</h1>
        <h2 className="text-md mb-6 text-center text-gray-400">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">
            Email
          </label>
          <input onChange={handleChange}
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
          <input onChange={handleChange}
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
        <button onClick={handleSubmit}
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



  )
}

export default LoginPage