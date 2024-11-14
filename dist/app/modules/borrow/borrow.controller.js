"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../util/catchAsync"));
const borrow_service_1 = require("./borrow.service");
const sendResponse_1 = __importDefault(require("../../util/sendResponse"));
// ! for creating a borrow record
const createBorrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowServices.createBorrowBook(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book borrowed successfully",
        data: result,
    });
}));
// ! for returning  borrow book
const returnBorrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowServices.returnBook(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Book returned successfully",
        data: result,
    });
}));
// ! for getting  overdue  book
const getOverdueBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowServices.getOverdueData();
    if ((result === null || result === void 0 ? void 0 : result.length) < 1) {
        (0, sendResponse_1.default)(res, {
            success: true,
            status: http_status_1.default.OK,
            message: "No overdue books",
            data: [],
        });
        return;
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Overdue borrow list fetched",
        data: result,
    });
}));
//
exports.borrowController = {
    createBorrowBook,
    returnBorrowBook,
    getOverdueBook,
};
