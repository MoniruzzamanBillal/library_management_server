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

// ! for returning  borrow book
const returnBorrowBook = catchAsync(async (req, res) => {
  const result = await borrowServices.returnBook(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book returned successfully",
    data: result,
  });
});

// ! for getting  overdue  book
const getOverdueBook = catchAsync(async (req, res) => {
  const result = await borrowServices.getOverdueData();

  if (result?.length < 1) {
    sendResponse(res, {
      success: true,
      status: httpStatus.OK,
      message: "No overdue books",
      data: [],
    });
    return;
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Overdue borrow list fetched",
    data: result,
  });
});

//
export const borrowController = {
  createBorrowBook,
  returnBorrowBook,
  getOverdueBook,
};
