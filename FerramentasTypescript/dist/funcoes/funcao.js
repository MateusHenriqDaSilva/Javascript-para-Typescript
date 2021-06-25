"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somar = void 0;
function somar(...valores) {
    return valores.reduce((total, valorAtual) => total += valorAtual);
}
exports.somar = somar;
