import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import { borrowServices } from "./borrow.service";
import sendResponse from "../../util/sendResponse";

// ! for creating a borrow record
const createBorrowBook = catchAsync(async (req, res) => {
  const result = await borrowServices.createBorrowBook(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

//
export const borrowController = {
  createBorrowBook,
};
