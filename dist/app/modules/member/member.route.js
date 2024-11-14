"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoute = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const member_validation_1 = require("./member.validation");
const member_controller_1 = require("./member.controller");
const router = (0, express_1.Router)();
// ! for getting all books
router.get("/", member_controller_1.memberController.getAllMembers);
//  ! for creating a member
router.post("/", (0, validateRequest_1.default)(member_validation_1.memberValidationSchemas.createMemberValidationSchema), member_controller_1.memberController.addMember);
// ! for getting single book
router.get("/:memberId", member_controller_1.memberController.getSingleMember);
// ! for updaing  book
router.put("/:memberId", (0, validateRequest_1.default)(member_validation_1.memberValidationSchemas.updateMemberValidationSchema), member_controller_1.memberController.updateMember);
// ! for deleting  book
router.delete("/:memberId", member_controller_1.memberController.deleteMember);
//
exports.memberRoute = router;
