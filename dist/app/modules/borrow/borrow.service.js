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
exports.borrowServices = void 0;
const PrismaClient_1 = __importDefault(require("../../util/PrismaClient"));
// ! for creating a borrow record
const createBorrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = payload;
    yield PrismaClient_1.default.member.findUniqueOrThrow({
        where: {
            memberId,
            isDeleted: false,
        },
    });
    yield PrismaClient_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
            isDeleted: false,
        },
    });
    const result = yield PrismaClient_1.default.borrowRecord.create({
        data: {
            bookId,
            memberId,
        },
        select: {
            borrowId: true,
            bookId: true,
            memberId: true,
            borrowDate: true,
        },
    });
    return result;
});
// ! return borrow book
const returnBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = payload;
    yield PrismaClient_1.default.borrowRecord.findUniqueOrThrow({
        where: { borrowId, isDeleted: false },
    });
    yield PrismaClient_1.default.borrowRecord.update({
        where: { borrowId, isDeleted: false },
        data: {
            returnDate: new Date(),
        },
    });
});
// ! for getting overdue data
const getOverdueData = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const overdueBookslists = yield PrismaClient_1.default.borrowRecord.findMany({
        where: {
            returnDate: null,
            isDeleted: false,
            borrowDate: {
                lt: new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000),
            },
        },
        include: {
            book: {
                select: {
                    title: true,
                },
            },
            member: { select: { name: true } },
        },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const overdueList = overdueBookslists === null || overdueBookslists === void 0 ? void 0 : overdueBookslists.map((record) => {
        const overdueDays = Math.floor((today.getTime() - new Date(record.borrowDate).getTime()) /
            (24 * 60 * 60 * 1000)) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
    return overdueList;
});
//
exports.borrowServices = {
    createBorrowBook,
    returnBook,
    getOverdueData,
};
