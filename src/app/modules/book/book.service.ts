import prisma from "../../util/PrismaClient";
import { TBook } from "./book.interface";

// ! for creating a book
const addBook = async (payload: TBook) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// ! for getting all books
const getAllBooks = async () => {
  const result = await prisma.book.findMany({
    where: {
      isDeleted: false,
    },
  });

  return result;
};

// ! for getting specific book
const getSingleBook = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: { bookId: id, isDeleted: false },
  });

  return result;
};

// ! for updating book
const updateBook = async (id: string, payload: Partial<TBook>) => {
  const result = await prisma.book.update({
    where: { bookId: id, isDeleted: false },
    data: payload,
  });

  return result;
};

// ! for deleting book
const deleteBook = async (id: string) => {
  const result = await prisma.$transaction(async (trxnClient) => {
    const result = await trxnClient.book.update({
      where: { bookId: id },
      data: {
        isDeleted: true,
      },
    });

    await trxnClient.borrowRecord.updateMany({
      where: {
        bookId: id,
      },
      data: {
        isDeleted: true,
      },
    });

    return result;
  });

  return result;
};

//
export const bookServices = {
  addBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
