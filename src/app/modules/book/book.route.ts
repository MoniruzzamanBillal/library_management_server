import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { bookValidationSchemas } from "./book.validation";
import { bookController } from "./book.controller";

const router = Router();

// ! for getting all books
router.get("/", bookController.getAllBooks);

//  ! for creating a book
router.post(
  "/",
  validateRequest(bookValidationSchemas.createBookValidationSchema),
  bookController.addBook
);

// ! for getting single book
router.get("/:bookId", bookController.getSingleBook);

// ! for updaing  book
router.put("/:bookId", bookController.updateBook);

// ! for deleting  book
router.delete("/:bookId", bookController.deleteBook);

//
export const bookRouter = router;
