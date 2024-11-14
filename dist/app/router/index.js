"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const book_route_1 = require("../modules/book/book.route");
const member_route_1 = require("../modules/member/member.route");
const borrow_route_1 = require("../modules/borrow/borrow.route");
const router = (0, express_1.Router)();
const routeArray = [
    {
        path: "/books",
        route: book_route_1.bookRouter,
    },
    {
        path: "/members",
        route: member_route_1.memberRoute,
    },
    {
        path: "/",
        route: borrow_route_1.borrowRouter,
    },
];
routeArray.forEach((item) => {
    router.use(item.path, item.route);
});
exports.MainRouter = router;
