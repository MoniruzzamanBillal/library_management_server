import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

// ! for getting overdue books
router.get("/borrow/overdue", borrowController.getOverdueBook);

// ! for creating a borrow record
router.post("/borrow", borrowController.createBorrowBook);

// ! for returning a borrow book
router.post("/return", borrowController.returnBorrowBook);

//
export const borrowRouter = router;
