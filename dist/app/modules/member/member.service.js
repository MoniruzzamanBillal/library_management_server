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
exports.memberServices = void 0;
const PrismaClient_1 = __importDefault(require("../../util/PrismaClient"));
// ! for creating member
const addMember = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.default.member.create({
        data: payload,
    });
    return result;
});
// ! for getting all members
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.default.member.findMany({
        where: {
            isDeleted: false,
        },
    });
    return result;
});
// ! for getting specific member
const getSingleMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.default.member.findUniqueOrThrow({
        where: { memberId: id, isDeleted: false },
    });
    return result;
});
// ! for updating member
const updateMember = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.default.member.findUniqueOrThrow({
        where: { memberId: id, isDeleted: false },
    });
    const result = yield PrismaClient_1.default.member.update({
        where: { memberId: id, isDeleted: false },
        data: payload,
    });
    return result;
});
// ! for deleting book
const deleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.default.member.findUniqueOrThrow({
        where: { memberId: id, isDeleted: false },
    });
    const result = yield PrismaClient_1.default.member.update({
        where: { memberId: id },
        data: {
            isDeleted: true,
        },
    });
    return result;
});
//
exports.memberServices = {
    addMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
