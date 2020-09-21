
/**
 * Flag : Describe all element of a flag
 * Any flag must be inherit this class
 */
abstract class Flag {

    name: string; //name of the flag (like --port)
    alias: string; //alias is the small flag (like -p)
    descritpion: string; //description on the flag for help
    arg: string|null; //arg if flag must be with argument (like --port 3000)
    required: Boolean; //the flag is required

    constructor(name: string, alias: string, description: string, arg: string|null = null, required: Boolean = false)
    {
        this.name = name;
        this.alias = alias;
        this.descritpion = description;
        this.required = required;
        this.arg = arg;
    }

    abstract execute(program: any): void;

}

export default Flag;