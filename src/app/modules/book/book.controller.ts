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

//
export const bookController = { addBook };
