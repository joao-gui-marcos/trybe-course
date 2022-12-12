"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookModel_1 = __importDefault(require("./database/models/BookModel"));
const CommentModel_1 = __importDefault(require("./database/models/CommentModel"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield BookModel_1.default.findAll({ raw: true });
    console.table(books);
    const comments = yield CommentModel_1.default.findAll({ raw: true });
    console.table(comments);
    const booksWithComments = yield BookModel_1.default.findAll({ raw: true, include: ['comments'] });
    console.table(booksWithComments);
    process.exit(0);
}))();
