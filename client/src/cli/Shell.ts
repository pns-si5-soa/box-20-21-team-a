import * as readline from 'readline';
import Command from "./commands/Command";


// link to yargs: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/


class Shell {



    // private readonly readLine = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout,
    // });

    // commands: Array<Command>;
    // private currentInput: string;
    //
    // constructor() {
    //     this.commands = [];
    //     this.currentInput = "";
    // }
    //
    // run(): void {

        // this.read();
    // }

    // private read(): void {
    //     this.readLine.question("$ ", (answer: string) => {
    //         if (answer === "exit") {
    //             console.log("Exiting...");
    //             this.readLine.close();
    //         }
    //         this.currentInput = answer;
    //     });
    // }


}

export default Shell;