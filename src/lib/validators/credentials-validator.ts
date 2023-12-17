import { z } from "zod"

export const AuthValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "Password min lenght 8"})
})

export type TAuthValidator = z.infer<typeof AuthValidator>