"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
// ! for getting all books
router.get("/", book_controller_1.bookController.getAllBooks);
//  ! for creating a book
router.post("/", (0, validateRequest_1.default)(book_validation_1.bookValidationSchemas.createBookValidationSchema), book_controller_1.bookController.addBook);
// ! for getting single book
router.get("/:bookId", book_controller_1.bookController.getSingleBook);
// ! for updaing  book
router.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.bookValidationSchemas.updateBookValidationSchema), book_controller_1.bookController.updateBook);
// ! for deleting  book
router.delete("/:bookId", book_controller_1.bookController.deleteBook);
//
exports.bookRouter = router;
