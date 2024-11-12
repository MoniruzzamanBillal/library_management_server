import { Router } from "express";

import { bookRouter } from "../modules/book/book.route";

const router = Router();

const routeArray = [
  {
    path: "/books",
    route: bookRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;
