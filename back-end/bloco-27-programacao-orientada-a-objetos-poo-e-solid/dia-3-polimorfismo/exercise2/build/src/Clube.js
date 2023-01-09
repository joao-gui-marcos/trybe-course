"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clube {
    constructor() {
        this.quadras = [];
    }
    adicionarQuadra(quadra) {
        this.quadras.push(quadra);
    }
    buscarQuadra(index) {
        return this.quadras[index];
    }
}
exports.default = Clube;
