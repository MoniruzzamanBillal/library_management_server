import prisma from "../../util/PrismaClient";
import { TMember } from "./member.interface";

// ! for creating member
const addMember = async (payload: TMember) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

// ! for getting all members
const getAllMembers = async () => {
  const result = await prisma.member.findMany({
    where: {
      isDeleted: false,
    },
  });

  return result;
};

// ! for getting specific member
const getSingleMember = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: { memberId: id, isDeleted: false },
  });

  return result;
};

// ! for updating member
const updateMember = async (id: string, payload: Partial<TMember>) => {
  const result = await prisma.member.update({
    where: { memberId: id, isDeleted: false },
    data: payload,
  });

  return result;
};

// ! for deleting book
const deleteMember = async (id: string) => {
  const result = await prisma.member.update({
    where: { memberId: id },
    data: {
      isDeleted: true,
    },
  });

  return result;
};

//
export const memberServices = {
  addMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
