import z from "zod"

const schema = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
}).refine((data) => {
    return data.title || data.content
}, {
    message: "at least on the title or content must be provided"
})

const schema_title_opt = z.object({
    title: z.string(),
    content: z.string().optional()
})

const schema_content_opt = z.object({
    title: z.string().optional(),
    content: z.string()
})


const schema_2 = z.union([z.object({
    title: z.string(),
    content: z.string().optional()
}), z.object({
    title: z.string().optional(),
    content: z.string()
})]);



const data = {
    title: "",
    content: ""
}

const res = schema_2.safeParse(data);
console.log(JSON.stringify(res));
