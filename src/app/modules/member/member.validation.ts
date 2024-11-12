import { z } from "zod";

const createMemberValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    phone: z
      .string()
      .min(10, "Phone number should have at least 10 characters"),
    membershipDate: z.string(),
  }),
});

const updateMemberValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    email: z.string().email("Invalid email format").optional(),
    phone: z
      .string()
      .min(10, "Phone number should have at least 10 characters")
      .optional(),
  }),
});

//
export const memberValidationSchemas = {
  createMemberValidationSchema,
  updateMemberValidationSchema,
};
