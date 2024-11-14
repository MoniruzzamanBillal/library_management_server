import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong!!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
};

export default globalErrorHandler;
