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

//
export const bookValidationSchemas = {
  createBookValidationSchema,
};
