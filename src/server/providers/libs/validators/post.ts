import { z } from "zod"

const get = z.object({
    id: z.string().min(20),
})

const add = z.object({
    title: z.string().min(3),
    body: z.string().min(5),
})

const edit = z.object({
    id: z.string().min(20),
})

const deleteP = z.object({
    id: z.string().min(20),
    title: z.string().min(3),
    body: z.string().min(5),
})

export default { get, add, edit, deleteP }