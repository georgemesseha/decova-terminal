import { CurrentTerminal as terminal } from "../src/CurrentTerminal";

(async ()=>{

    terminal.Exec("docker container ls -a");

    let ops = {c1:"Choice 1", c2:"Choice 2", c3:"Choice 3"};
    await terminal.McqAsync("Pick your cherry", ops);
   

})();