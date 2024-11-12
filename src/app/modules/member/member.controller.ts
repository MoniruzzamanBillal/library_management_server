import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { memberServices } from "./member.service";

// ! for creating a member
const addMember = catchAsync(async (req, res) => {
  const result = await memberServices.addMember(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Member created successfully",
    data: result,
  });
});

// ! for getting all members
const getAllMembers = catchAsync(async (req, res) => {
  const result = await memberServices.getAllMembers();

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Members retrieved successfully",
    data: result,
  });
});

// ! for getting single  member
const getSingleMember = catchAsync(async (req, res) => {
  const result = await memberServices.getSingleMember(req.params?.memberId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

// ! for updating books
const updateMember = catchAsync(async (req, res) => {
  const result = await memberServices.updateMember(
    req.params?.memberId,
    req.body
  );

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Member updated successfully",
    data: result,
  });
});

// ! for deleting book
const deleteMember = catchAsync(async (req, res) => {
  await memberServices.deleteMember(req.params?.memberId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Member successfully deleted",
  });
});

//
export const memberController = {
  addMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
