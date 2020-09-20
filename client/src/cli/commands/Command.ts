import Shell from "../Shell";

interface Command {

    shell: Shell;

    execute(args: Array<string>): void;
    help(): string;

}

export default Command;