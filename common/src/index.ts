import z from "zod";

export const signupInput = z.object({
    email: z.string().email().trim(),
    password: z.string().min(8).max(20).trim(),
    name: z.string().trim().optional()
});

export type signupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    email: z.string().email().trim(),
    password: z.string().trim().min(8).max(20)
});

export type signinInput = z.infer<typeof signinInput>


export const createPostInput = z.object({
    title: z.string().trim().min(5),
    content: z.string().trim().min(10),
});

export type createPostInput = z.infer<typeof createPostInput>

// in update input, title and content are optional inputs, but both cannot be optional at the same time. 

export const updatePostInput = z.object({
    id: z.string().trim().uuid(),
    title: z.string().trim().optional(),
    content: z.string().trim().optional(),
}).refine((data) => (data.title || data.content), {
    message: "Atleast one the title or content must be provided",
    path: []
});

export type updatePostInput = z.infer<typeof updatePostInput>
