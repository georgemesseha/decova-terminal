import * as cp from "child_process";
import ch from "chalk";
import inquirer from 'inquirer';

/**
 * Contains essential static methods for creating a command line tool augmented with the facility
 * to synchronusly run commands in the execution flow.
 */
export class CurrentTerminal
{
    /**
     * Synchronously executes the provided command {cmd} in a newly spawned process with stdin and stdout as inherited from the current process.
     * @param cmd : The command to execute along with its arguments
     */
    public static Exec(cmd:string):void
    {
        console.log
        (
            ch.yellow(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        );
        console.log
        (
            ch.green.bold(`>> ${cmd}`)
        );

        if(process.platform === 'win32')
        {
            cp.spawnSync(cmd, [], {stdio:'inherit', shell:"cmd.exe"});
        }
        else
        {
            cp.spawnSync(cmd, [], {stdio:'inherit', shell:"/bin/sh"});
        }

        console.log
        (
            ch.yellow("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        );
    }

    /**
     * 
     * @param question The header question that describes the options scope to user.
     * @param optionsMap prop/value pairs container object, where the values are the options text to display
     * to user, while the keys are used to map the selected option programatically to the selected option.
     */
    public static async McqAsync(question:string, optionsMap:object)
    {
        let qs: inquirer.QuestionCollection = 
        [
            {
                type: 'list',
                choices: Object.values(optionsMap),
                name: 'chosen',
                message: question
            }      
        ];   

        let answerPromise = await inquirer.prompt(qs);
        return await answerPromise.chosen;
    }
}