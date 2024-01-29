"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.penjumlahanBilangan = void 0;
function penjumlahanBilangan(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if ((a[i] % 2 === 0 && b === "genap") ||
            (a[i] % 2 !== 0 && b === "ganjil")) {
            sum += a[i];
        }
    }
    return sum;
}
exports.penjumlahanBilangan = penjumlahanBilangan;
