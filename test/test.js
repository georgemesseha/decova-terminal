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
Object.defineProperty(exports, "__esModule", { value: true });
const CurrentTerminal_1 = require("../src/CurrentTerminal");
(() => __awaiter(void 0, void 0, void 0, function* () {
    CurrentTerminal_1.CurrentTerminal.Exec("docker container ls -a");
    let ops = { c1: "Choice 1", c2: "Choice 2", c3: "Choice 3" };
    yield CurrentTerminal_1.CurrentTerminal.McqAsync("Pick your cherry", ops);
}))();
//# sourceMappingURL=test.js.map