"use strict";
// ./services/books.service.ts
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
const connection_1 = __importDefault(require("../models/connection"));
const book_model_1 = __importDefault(require("../models/book.model"));
const restify_errors_1 = require("restify-errors");
const properties = ['title', 'price', 'author', 'isbn'];
class BookService {
    constructor() {
        this.model = new book_model_1.default(connection_1.default);
    }
    // os próximos três métodos serão nossas validações
    static validateProperties(book) {
        for (let i = 0; i < properties.length; i += 1) {
            if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
                return [false, properties[i]];
            }
        }
        return [true, null];
    }
    static validateValues(book) {
        const entries = Object.entries(book);
        for (let i = 0; i < entries.length; i += 1) {
            const [property, value] = entries[i];
            if (!value) {
                return [false, property];
            }
        }
        return [true, null];
    }
    static validationBook(book) {
        let [valid, property] = BookService.validateProperties(book);
        if (!valid) {
            return `O campo ${property} é obrigatório.`;
        }
        [valid, property] = BookService.validateValues(book);
        if (!valid) {
            return `O campo ${property} não pode ser nulo ou vazio.`;
        }
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.model.getAll();
            return books;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getById(id);
            return book;
        });
    }
    create(book) {
        // chamamos o método validationBook
        const isValidBook = BookService.validationBook(book);
        if (typeof isValidBook === 'string') {
            // aqui estamos jogando o erro para o nosso middleware de erro fazer o tratamento e dar a resposta da requisição
            throw new restify_errors_1.BadRequestError(isValidBook);
        }
        // depois de todas as verificações chamamos a camada de model
        return this.model.create(book);
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            // vamos utilizar a mesma validação do método create
            const isValidBook = BookService.validationBook(book);
            if (typeof isValidBook === 'string') {
                throw new restify_errors_1.BadRequestError(isValidBook);
            }
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new restify_errors_1.NotFoundError('Book not found!');
            }
            return this.model.update(id, book);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new restify_errors_1.NotFoundError('Book not found!');
            }
            this.model.remove(id);
        });
    }
}
exports.default = BookService;
