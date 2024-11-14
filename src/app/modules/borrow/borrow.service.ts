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

  const result = await prisma.borrowRecord.create({
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

  return result;
};

// ! return borrow book
const returnBook = async (payload: { borrowId: string }) => {
  const { borrowId } = payload;

  await prisma.borrowRecord.findUniqueOrThrow({
    where: { borrowId, isDeleted: false },
  });

  await prisma.borrowRecord.update({
    where: { borrowId, isDeleted: false },
    data: {
      returnDate: new Date(),
    },
  });
};

// ! for getting overdue data
const getOverdueData = async () => {
  const today = new Date();

  const overdueBookslists = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      isDeleted: false,
      borrowDate: {
        lt: new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000),
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: { select: { name: true } },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overdueList = overdueBookslists?.map((record: any) => {
    const overdueDays =
      Math.floor(
        (today.getTime() - new Date(record.borrowDate).getTime()) /
          (24 * 60 * 60 * 1000)
      ) - 14;

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });

  return overdueList;
};

//
export const borrowServices = {
  createBorrowBook,
  returnBook,
  getOverdueData,
};
