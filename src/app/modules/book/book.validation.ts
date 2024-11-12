import { z } from "zod";

// ! for creating a book
const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Book title is required !! "),
    genre: z.string().min(1, "Book genre is required !!"),
    publishedYear: z.number().int().positive(),
    totalCopies: z.number().int().nonnegative(),
    availableCopies: z.number().int().nonnegative(),
  }),
});
// ! for updating a book
const updateBookValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Book title is required !! ").optional(),
    genre: z.string().min(1, "Book genre is required !!").optional(),
    publishedYear: z.number().int().positive().optional(),
    totalCopies: z.number().int().nonnegative().optional(),
    availableCopies: z.number().int().nonnegative().optional(),
  }),
});

//
export const bookValidationSchemas = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
