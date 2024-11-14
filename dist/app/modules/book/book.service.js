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
exports.bookServices = void 0;
const PrismaClient_1 = __importDefault(require("../../util/PrismaClient"));
// ! for creating a book
const addBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.default.book.create({
        data: payload,
    });
    return result;
});
// ! for getting all books
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.default.book.findMany({
        where: {
            isDeleted: false,
        },
    });
    return result;
});
// ! for getting specific book
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.default.book.findUniqueOrThrow({
        where: { bookId: id, isDeleted: false },
    });
    return result;
});
// ! for updating book
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.default.book.findUniqueOrThrow({
        where: { bookId: id, isDeleted: false },
    });
    const result = yield PrismaClient_1.default.book.update({
        where: { bookId: id, isDeleted: false },
        data: payload,
    });
    return result;
});
// ! for deleting book
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.default.book.findUniqueOrThrow({
        where: { bookId: id, isDeleted: false },
    });
    const result = yield PrismaClient_1.default.$transaction((trxnClient) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield trxnClient.book.update({
            where: { bookId: id },
            data: {
                isDeleted: true,
            },
        });
        yield trxnClient.borrowRecord.updateMany({
            where: {
                bookId: id,
            },
            data: {
                isDeleted: true,
            },
        });
        return result;
    }));
    return result;
});
//
exports.bookServices = {
    addBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
