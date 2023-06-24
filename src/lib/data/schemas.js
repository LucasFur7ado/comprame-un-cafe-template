import { z } from 'zod'

export const messageSchema = z.object({
    name: z.string({ required_error: 'Nombre requerido' })
        .max(30, { message: 'El nombre debe tener menos de 30 caracteres' })
        .trim()
        .optional(),
    description: z.string({ required_error: 'Nombre requerido' })
        .max(300, { message: 'La descripción debe tener menos de 300 caracteres' })
        .trim()
        .optional(),
})