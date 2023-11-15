import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

const request = {
    isLoading: false,
    data: null,
    error: null
}

const Register = () => {

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
        axios.post("/api/signup", body).then((res) => {
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
        <h1 className="text-center font-bold mb-3">COMPANY NAME</h1>
        <h2 className="text-md mb-6 text-center text-gray-400">Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="name">
            Name
          </label>
          <input onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
        </div>
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
       
        <button onClick={handleSubmit}
          className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Register
        </button>

        <p className="my-3 text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register