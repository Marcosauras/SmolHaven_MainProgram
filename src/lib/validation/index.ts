import { z } from "zod";

export const SignupValidation = z.object({
    username: z.string().min(2, { message: 'Username needs to be between 2 and 30 characters'}).max(30, { message: 'Username needs to be between 2 and 30 characters'}),
    email: z.email(),
    password: z.string().min(8, { message: 'Password needs to be at least 8 characters long'}),
  });