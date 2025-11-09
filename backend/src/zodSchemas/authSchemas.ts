import z from "zod";

export const signupSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(), 
    password: z.string().min(8, "Min length is 8 characters").max(25, "Max length is 25 characters")
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Min length is 8 characters").max(25, "Max length is 25 characters")

})

