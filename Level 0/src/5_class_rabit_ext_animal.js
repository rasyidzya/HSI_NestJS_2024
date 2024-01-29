"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rabbit = void 0;
var _4_class_animal_construct_1 = require("./4_class_animal_construct");
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name, age) {
        // Memanggil constructor dari class induk (Animal) dengan menyertakan nilai yang diperlukan
        return _super.call(this, name, age, true) || this;
    }
    Rabbit.prototype.eat = function () {
        return "".concat(this.name, " yang berumur ").concat(this.age, " tahun sedang makan!");
    };
    return Rabbit;
}(_4_class_animal_construct_1.Animal));
exports.Rabbit = Rabbit;
