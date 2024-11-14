"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRouter = void 0;
const express_1 = require("express");
const borrow_controller_1 = require("./borrow.controller");
const router = (0, express_1.Router)();
// ! for getting overdue books
router.get("/borrow/overdue", borrow_controller_1.borrowController.getOverdueBook);
// ! for creating a borrow record
router.post("/borrow", borrow_controller_1.borrowController.createBorrowBook);
// ! for returning a borrow book
router.post("/return", borrow_controller_1.borrowController.returnBorrowBook);
//
exports.borrowRouter = router;
