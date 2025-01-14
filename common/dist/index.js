"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email().trim(),
    password: zod_1.default.string().trim().min(8).max(20),
    name: zod_1.default.string().trim().optional()
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email().trim(),
    password: zod_1.default.string().trim().min(8).max(20)
});
exports.createPostInput = zod_1.default.object({
    title: zod_1.default.string().trim().min(5),
    content: zod_1.default.string().trim().min(10),
});
// in update input, title and content are optional inputs, but both cannot be optional at the same time. 
exports.updatePostInput = zod_1.default.object({
    id: zod_1.default.string().trim().uuid(),
    title: zod_1.default.string().trim().optional(),
    content: zod_1.default.string().trim().optional(),
}).refine((data) => (data.title || data.content), {
    message: "Atleast one the title or content must be provided",
    path: []
});
