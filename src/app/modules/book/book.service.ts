import prisma from "../../util/PrismaClient";

// ! for creating a book
const createBook = async (payload: any) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

//
export const bookServices = {
  createBook,
};
