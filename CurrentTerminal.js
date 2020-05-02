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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cp = __importStar(require("child_process"));
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
/**
 * Contains essential static methods for creating a command line tool augmented with the facility
 * to synchronusly run commands in the execution flow.
 */
class CurrentTerminal {
    /**
     * Synchronously executes the provided command {cmd} in a newly spawned process with stdin and stdout as inherited from the current process.
     * @param cmd : The command to execute along with its arguments
     */
    static Exec(cmd) {
        console.log(chalk_1.default.yellow(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
        console.log(chalk_1.default.green.bold(`>> ${cmd}`));
        if (process.platform === 'win32') {
            cp.spawnSync(cmd, [], { stdio: 'inherit', shell: "cmd.exe" });
        }
        else {
            cp.spawnSync(cmd, [], { stdio: 'inherit', shell: "/bin/sh" });
        }
        console.log(chalk_1.default.yellow("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
    }
    /**
     *
     * @param question The header question that describes the options scope to user.
     * @param optionsMap prop/value pairs container object, where the values are the options text to display
     * to user, while the keys are used to map the selected option programatically to the selected option.
     */
    static McqAsync(question, optionsMap) {
        return __awaiter(this, void 0, void 0, function* () {
            let qs = [
                {
                    type: 'list',
                    choices: Object.values(optionsMap),
                    name: 'chosen',
                    message: question
                }
            ];
            let answerPromise = yield inquirer_1.default.prompt(qs);
            return yield answerPromise.chosen;
        });
    }
}
exports.CurrentTerminal = CurrentTerminal;
//# sourceMappingURL=CurrentTerminal.js.map