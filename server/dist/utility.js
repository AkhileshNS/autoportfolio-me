"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToStatements = (str) => str
    ? str
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => Boolean(item))
    : [];
//# sourceMappingURL=utility.js.map