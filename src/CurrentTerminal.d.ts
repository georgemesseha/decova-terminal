/**
 * Contains essential static methods for creating a command line tool augmented with the facility
 * to synchronusly run commands in the execution flow.
 */
export declare class CurrentTerminal {
    /**
     * Synchronously executes the provided command {cmd} in a newly spawned process with stdin and stdout as inherited from the current process.
     * @param cmd : The command to execute along with its arguments
     */
    static Exec(cmd: string): void;
    /**
     *
     * @param question The header question that describes the options scope to user.
     * @param optionsMap prop/value pairs container object, where the values are the options text to display
     * to user, while the keys are used to map the selected option programatically to the selected option.
     */
    static McqAsync(question: string, optionsMap: object): Promise<any>;
}
//# sourceMappingURL=CurrentTerminal.d.ts.map