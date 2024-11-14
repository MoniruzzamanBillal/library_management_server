"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidationSchemas = void 0;
const zod_1 = require("zod");
// ! for creating a book
const createBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Book title is required !! "),
        genre: zod_1.z.string().min(1, "Book genre is required !!"),
        publishedYear: zod_1.z.number().int().positive(),
        totalCopies: zod_1.z.number().int().nonnegative(),
        availableCopies: zod_1.z.number().int().nonnegative(),
    }),
});
// ! for updating a book
const updateBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Book title is required !! ").optional(),
        genre: zod_1.z.string().min(1, "Book genre is required !!").optional(),
        publishedYear: zod_1.z.number().int().positive().optional(),
        totalCopies: zod_1.z.number().int().nonnegative().optional(),
        availableCopies: zod_1.z.number().int().nonnegative().optional(),
    }),
});
//
exports.bookValidationSchemas = {
    createBookValidationSchema,
    updateBookValidationSchema,
};
