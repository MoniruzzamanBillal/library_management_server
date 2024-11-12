import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { bookValidationSchemas } from "./book.validation";
import { bookController } from "./book.controller";

const router = Router();

//  ! for creating a book
router.post(
  "/",
  validateRequest(bookValidationSchemas.createBookValidationSchema),
  bookController.addBook
);

//
export const bookRouter = router;
