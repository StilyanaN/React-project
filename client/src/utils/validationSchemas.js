import * as yup from 'yup';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(abv\.bg|gmail\.com)$/i;

export const loginSchema = yup.object().shape({
  email: yup.string().trim().min(1, 'Email is required.').email("Invalid email address.").matches(emailRegex, "Invalid email address."),
  password: yup.string().trim().min(1, 'Password is required.').min(3, 'Password must be at least 6 characters long.')
});

export const registerSchema = yup.object({
    username: yup.string().trim().min(1, 'Name is required.').min(2, 'Name must be at least 2 characters long.'),
    email: yup.string().trim().min(1, 'Email is required.').email("Invalid email address.").matches(emailRegex, "Invalid email address."),
    password: yup.string().trim().min(5, 'Password must be at least 5 characters long.'),
    repassword: yup.string().trim().min(5, 'Password confirmation is required.').oneOf([yup.ref('password'), null],"Passwords don't match.")
})

export const productSchema = yup.object().shape({
  name: yup.string().trim().required('Product name is required.'),
  price: yup.number().typeError('Price must be a number.').positive('Price must be a positive number.').required('Price is required.'),
  calories: yup.number().typeError('Calories must be a number.').positive('Calories must be a positive number.').required('Calories are required.'),
  imageUrl: yup.string().trim().url('Invalid image URL.').required('Image URL is required.'),
});