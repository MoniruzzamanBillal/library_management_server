"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidationSchemas = void 0;
const zod_1 = require("zod");
const createMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email("Invalid email format"),
        phone: zod_1.z
            .string()
            .min(10, "Phone number should have at least 10 characters"),
        membershipDate: zod_1.z.string(),
    }),
});
const updateMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required").optional(),
        email: zod_1.z.string().email("Invalid email format").optional(),
        phone: zod_1.z
            .string()
            .min(10, "Phone number should have at least 10 characters")
            .optional(),
    }),
});
//
exports.memberValidationSchemas = {
    createMemberValidationSchema,
    updateMemberValidationSchema,
};
