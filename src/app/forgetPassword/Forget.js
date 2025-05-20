import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { ROUTE_NAMES } from '../../constants/routesConstants';
import { forgetPasswordSchema } from '../../constants/yupSchema';
import { forgetPassword } from '../../store/slices/authSlice';

export default function Forget() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(forgetPasswordSchema),
  });

  const { control, handleSubmit, formState: { errors, isSubmitting } } = methods;

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(forgetPassword({
      data,
      callBack: (response) => {
        if (response.status === 200) {
          toast.success('Reset password link sent to your email!');
          navigate(ROUTE_NAMES.RESET_PASSWORD);
        } else {
          toast.error('Failed to send reset password link!');
        }
        setLoading(false);
      }
    }));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <div className="text-center mb-6">
          <img
            className="w-10 h-10 mx-auto mb-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h1>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              )}
            />
            <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
          </div>

         

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </section>
  );
}
