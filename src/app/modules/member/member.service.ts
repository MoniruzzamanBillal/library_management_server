import prisma from "../../util/PrismaClient";

// ! for creating member
const addMember = async (payload) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

//
export const memberServices = {
  addMember,
};
