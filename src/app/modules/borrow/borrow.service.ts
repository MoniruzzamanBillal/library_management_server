import prisma from "../../util/PrismaClient";
import { TBorrow } from "./borrow.interface";

// ! for creating a borrow record
const createBorrowBook = async (payload: TBorrow) => {
  const { bookId, memberId } = payload;

  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
      isDeleted: false,
    },
  });

  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
      isDeleted: false,
    },
  });

  const result = await prisma.$transaction(async (trnxClient) => {
    const result = await trnxClient.borrowRecord.create({
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

    await trnxClient.book.update({
      where: { bookId },
      data: {
        availableCopies: { decrement: 1 },
      },
    });

    return result;
  });

  return result;
};

//
export const borrowServices = {
  createBorrowBook,
};
