// src/utils/validationSchemas.js
import * as z from "zod";

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(abv\.bg|gmail\.com)$/i;

export const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email is required.').email("Invalid email address.").regex(emailRegex, "Invalid email address."),
  password: z.string().trim().min(1, 'Password is required.').min(3, 'Password must be at least 6 characters long.')
});

export const registerSchema = z.object({
    name: z.string().trim().min(1, 'Name is required.').min(2, 'Name must be at least 2 characters long.'),
    email: z.string().trim().min(1, 'Email is required.').email("Invalid email address.").regex(emailRegex, "Invalid email address."),
    password: z.string().trim().min(6, 'Password must be at least 6 characters long.'),
    repassword: z.string().trim().min(6, 'Password confirmation is required.')
  }).refine((data) => data.password === data.repassword, {
    path: ['repassword'],
    message: "Passwords don't match.",
  });