import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { resetPassword } from '../../store/slices/authSlice';
import { ROUTE_NAMES } from '../../constants/routesConstants';
import { resetPasswordScehma } from '../../constants/yupSchema';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

export default function Reset() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(resetPasswordScehma),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    const payload = { newPassword: data.password };
    setLoading(true);
    dispatch(
      resetPassword({
        payload,
        token,
        callBack: (response) => {
          if (response.status === 200) {
            toast.success('Password reset successfully!');
            navigate(ROUTE_NAMES.HOME);
          } else {
            toast.error('Password reset failed!');
          }
          setLoading(false);
        },
      })
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input {...field} type="password" placeholder="Enter new password" />
                )}
              />
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>
            <div>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input {...field} type="password" placeholder="Confirm password" />
                )}
              />
              <p className="text-sm text-red-500">{errors.confirmPassword?.message}</p>
            </div>
            <Button
              title="Reset Password"
              loading={loading}
              type="submit"
              disabled={isSubmitting || loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
