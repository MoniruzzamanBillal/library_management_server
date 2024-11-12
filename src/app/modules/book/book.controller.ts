import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { bookServices } from "./book.service";

// ! for creating a book
const addBook = catchAsync(async (req, res) => {
  const result = await bookServices.addBook(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book created successfully",
    data: result,
  });
});

// ! for getting all books
const getAllBooks = catchAsync(async (req, res) => {
  const result = await bookServices.getAllBooks();

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

// ! for getting single  books
const getSingleBook = catchAsync(async (req, res) => {
  const result = await bookServices.getSingleBook(req.params?.bookId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book retrieved successfully",
    data: result,
  });
});

// ! for updating books
const updateBook = catchAsync(async (req, res) => {
  const result = await bookServices.updateBook(req.params?.bookId, req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book updated successfully",
    data: result,
  });
});

// ! for deleting book
const deleteBook = catchAsync(async (req, res) => {
  await bookServices.deleteBook(req.params?.bookId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book successfully deleted",
  });
});

//
export const bookController = {
  addBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
