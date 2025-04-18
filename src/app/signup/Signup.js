// import { Link } from 'react-router-dom'
// import { ROUTE_NAMES } from '../../constants/routesConstants'

import React, { useState } from 'react'
import Button from '../../components/button/Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../constants/yupSchema';

export default function Signup() {

  const [loading, setLoading] = useState(false);
  const defaultValues = {
    name: "",
    email: "",
    password: ""
  }

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const { control, handleSubmit, formState: { errors, isSubmitting  }, reset} = methods;

  const onSubmit = (data) => {
    alert("form Submitted")
    console.log(data);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      reset()
    }, 2000);
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-10 rounded-lg shadow-md">

        <div className="mb-6">

          <label
            htmlFor="name"
            className="block mb-2 text-lg font-medium text-gray-900"
          >Name
          </label>

          <Controller name='name' control={control} render={({ field }) => (
            <input
              {...field}
              type="text"
              id="name"
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Name"
              required=""
            />
          )} />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900"
          > Email
          </label>

          <Controller name='email' control={control} render={({ field }) => (
            <input
              {...field}
              type="email"
              id="email"
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Email"
              required=""
            />
          )} />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900"
          >  Password
          </label>

          <Controller name='password' control={control} render={({ field }) => (
            <input
              {...field}
              type="password"
              id="password"
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Password"
              required=""
            />
          )} />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>

        <Button
          title={"Signup"}
          type="submit"
          loading={loading}
          disabled={isSubmitting || loading}
        />
        {/* <Link to={ROUTE_NAMES.LOGIN}>DIRECT TO LOGIN PAGE</Link> */}
      </form>
    </div>
  )
}
