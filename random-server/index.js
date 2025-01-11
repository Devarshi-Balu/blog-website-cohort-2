"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const schema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
}).refine((data) => {
    return data.title || data.content;
}, {
    message: "at least on the title or content must be provided"
});
const schema_title_opt = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string().optional()
});
const schema_content_opt = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string()
});
const schema_2 = zod_1.default.union([zod_1.default.object({
        title: zod_1.default.string(),
        content: zod_1.default.string().optional()
    }), zod_1.default.object({
        title: zod_1.default.string().optional(),
        content: zod_1.default.string()
    })]);
const data = {
    title: "",
    content: ""
};
const res = schema_2.safeParse(data);
console.log(JSON.stringify(res));
