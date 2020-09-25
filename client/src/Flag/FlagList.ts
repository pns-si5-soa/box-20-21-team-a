import * as flags from "./Flags";
import Flag from './Flag';

class FlagList {

    flags: Array<Flag>

    constructor() {
        this.flags = Object.values(flags)
    }

    build(program: any) {
        this.flags.forEach(flag => {
            program.option(`${flag.alias}, --${flag.name} ${(flag.arg !== null ? ' <' + flag.arg + '>' : '')}`, flag.descritpion);
            // program.option(flag.alias + ', --' + flag.name + (flag.arg !== null ? ' <' + flag.arg + '>' : ''), flag.descritpion)
        })
    }

    execute(program: any) {
        this.flags.forEach(flag => {
            if(program[flag.name] === undefined && flag.required) {
                throw "The flag --"+ flag.name +" is required"
            }
        })
        this.flags.forEach(flag => {
            if(program[flag.name] !== undefined) {
                flag.execute(program)
            }
        })
    }
}

export default FlagList;