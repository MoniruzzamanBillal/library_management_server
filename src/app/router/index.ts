import { Router } from "express";

import { bookRouter } from "../modules/book/book.route";
import { memberRoute } from "../modules/member/member.route";

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
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;
