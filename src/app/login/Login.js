import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants/routesConstants';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { loginSchema } from '../../constants/yupSchema';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logIn } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const defaultValues = {
    email: '',
    password: ''
  };
  
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
     dispatch(logIn({data, callBack: (response) => {
        if (response.data.status === 200) {
          alert('Login successful');
          navigate(ROUTE_NAMES.HOME); // Navigate to home page on successful login
        } else {
          alert('Login failed');
        }
        setLoading(false);   
      }
     }))
      setLoading(false);
      alert('Form Submitted');
      reset(); // reset the form
   
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter your Email"
              />
            )}
          />
          <p style={{ color: 'red' }}>{errors.email?.message}</p>

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Enter your Password"
              />
            )}
          />
          <p style={{ color: 'red' }}>{errors.password?.message}</p>

          {/* Submit Button */}
          <Button
            title="Login"
            loading={loading}
            type="submit"
            disabled={isSubmitting || loading}
          />
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Don't have an account?{' '}
          <Link to={ROUTE_NAMES.SIGNUP} style={{ color: '#007bff', textDecoration: 'none' }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
