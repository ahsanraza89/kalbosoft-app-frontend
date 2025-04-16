// import { Link } from 'react-router-dom'
// import { ROUTE_NAMES } from '../../constants/routesConstants'

import React, { useState } from 'react'
import Button from '../../components/button/Button';

export default function Signup() {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChangeName = (e) => { setFormData({ ...formData, name: e.target.value }) };
  const handleChangeEmail = (e) => { setFormData({ ...formData, email: e.target.value }) };
  const handleChangePassword = (e) => { setFormData({ ...formData, password: e.target.value }) };


  const handleSubmit = () => {
    alert("form Submitted")
    console.log("Form Data" , formData );
    
    setLoading(true);
 
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form className="w-full max-w-lg bg-white p-10 rounded-lg shadow-md">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Name"
            onChange={handleChangeName}
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Email"
            onChange={handleChangeEmail}
            required=""
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Password"
            onChange={handleChangePassword}
            required=""
          />
        </div>
        <Button
          title={"Signup"}
          onClick={handleSubmit}
          loading={loading}
        />
        {/* <Link to={ROUTE_NAMES.LOGIN}>DIRECT TO LOGIN PAGE</Link> */}
      </form>
    </div>
  )
}
