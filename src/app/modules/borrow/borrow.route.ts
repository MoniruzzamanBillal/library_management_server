import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

// ! for creating a borrow record
router.post("/borrow", borrowController.createBorrowBook);

//
export const borrowRouter = router;
