import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { MainRouter } from "./app/router";
import httpStatus from "http-status";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ! routes
app.use("/api", MainRouter);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ message: "server is running  !! " });
  } catch (error) {
    next(error);
  }
});

//! global error handler
app.use(globalErrorHandler);

app.all("*", async (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
