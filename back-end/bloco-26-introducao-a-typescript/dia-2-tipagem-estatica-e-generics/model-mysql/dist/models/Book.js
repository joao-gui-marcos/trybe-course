"use strict";
// ./models/Book.ts
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
const connection_1 = __importDefault(require("./connection"));
class BookModel {
    constructor() {
        this.connection = connection_1.default;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM books');
            return rows;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const [{ insertId }] = yield this.connection.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
            return Object.assign({ id: insertId }, book);
        });
    }
}
exports.default = BookModel;
