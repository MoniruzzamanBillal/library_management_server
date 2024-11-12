import prisma from "../../util/PrismaClient";
import { TBook } from "./book.interface";

// ! for creating a book
const addBook = async (payload: TBook) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

//
export const bookServices = {
  addBook,
};
