import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Required'),

    // confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('Required'),
});

export const signupSchema = Yup.object().shape({
  // name: Yup.string()
  // .min(2, 'Too Short!')
  // .max(50, 'Too Long!')
  // .required('Required'),
  email: Yup.string().email().required("Email is Required."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});

export const resetPasswordScehma  = Yup.object().shape({
  
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Required'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});
