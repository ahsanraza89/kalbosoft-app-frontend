// import React from 'react'

// export default function Forget() {
//   return (
//     <div>
//       <section className="bg-gray-50 dark:bg-gray-900">
//   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//     <a
//       href="#"
//       className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//     >
//       <img
//         className="w-8 h-8 mr-2"
//         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//         alt="logo"
//       />
//       Flowbite
//     </a>
//     <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
//       <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//         Forgot your password?
//       </h1>
//       <p className="font-light text-gray-500 dark:text-gray-400">
//         Don't fret! Just type in your email and we will send you a code to reset
//         your password!
//       </p>
//       <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
//         <div>
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="name@company.com"
//             required=""
//           />
//         </div>
//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <input
//               id="terms"
//               aria-describedby="terms"
//               type="checkbox"
//               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//               required=""
//             />
//           </div>
//           <div className="ml-3 text-sm">
//             <label
//               htmlFor="terms"
//               className="font-light text-gray-500 dark:text-gray-300"
//             >
//               I accept the{" "}
//               <a
//                 className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 href="#"
//               >
//                 Terms and Conditions
//               </a>
//             </label>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//         >
//           Reset password
//         </button>
//       </form>
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants/routesConstants';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { forgetPasswordSchema, } from '../../constants/yupSchema';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgetPassword } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Forget() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const defaultValues = {
    email: ''

  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(forgetPasswordSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },

  } = methods;

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    setLoading(true);

    dispatch(forgetPassword({
      data, callBack: (response) => {
        console.log("🚀 ~ dispatch ~ data:", data)
        if (response.status === 200) {
          toast.success('Reset password link sent to your email!');
          navigate(ROUTE_NAMES.RESET_PASSWORD); // Navigate to home page on successful login
        } else {
          toast.error('failed to send reset password link!')

        }
        setLoading(false);
      }
    }))



  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Forget Password</h2>

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



          {/* Submit Button */}
          <Button style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}
            title="Forget Password"
            loading={loading}
            type="submit"
            disabled={isSubmitting || loading}
          />
        </form>



      </div>
    </div>
  );
}
