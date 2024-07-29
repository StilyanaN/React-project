import * as yup from 'yup';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(abv\.bg|gmail\.com)$/i;

export const loginSchema = yup.object().shape({
  email: yup.string().trim().min(1, 'Email is required.').email("Invalid email address.").matches(emailRegex, "Invalid email address."),
  password: yup.string().trim().min(1, 'Password is required.').min(3, 'Password must be at least 6 characters long.')
});

export const registerSchema = yup.object({
    name: yup.string().trim().min(1, 'Name is required.').min(2, 'Name must be at least 2 characters long.'),
    email: yup.string().trim().min(1, 'Email is required.').email("Invalid email address.").matches(emailRegex, "Invalid email address."),
    password: yup.string().trim().min(6, 'Password must be at least 6 characters long.'),
    repassword: yup.string().trim().min(6, 'Password confirmation is required.').oneOf([yup.ref('password'), null],"Passwords don't match.")
})