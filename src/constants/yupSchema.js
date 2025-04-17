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
