import { Router } from "express";

import { bookRouter } from "../modules/book/book.route";
import { memberRoute } from "../modules/member/member.route";
import { borrowRouter } from "../modules/borrow/borrow.route";

const router = Router();

const routeArray = [
  {
    path: "/books",
    route: bookRouter,
  },
  {
    path: "/members",
    route: memberRoute,
  },
  {
    path: "/",
    route: borrowRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;
