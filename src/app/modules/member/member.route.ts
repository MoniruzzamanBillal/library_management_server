import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { memberValidationSchemas } from "./member.validation";
import { memberController } from "./member.controller";

const router = Router();

// ! for getting all books
router.get("/", memberController.getAllMembers);

//  ! for creating a member
router.post(
  "/",
  validateRequest(memberValidationSchemas.createMemberValidationSchema),
  memberController.addMember
);

// ! for getting single book
router.get("/:memberId", memberController.getSingleMember);

// ! for updaing  book
router.put(
  "/:memberId",
  validateRequest(memberValidationSchemas.updateMemberValidationSchema),
  memberController.updateMember
);

// ! for deleting  book
router.delete("/:memberId", memberController.deleteMember);

//
export const memberRoute = router;
