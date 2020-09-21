import Flag from '../Flag';

class Verbose extends Flag {

    execute(program: any): void {
        console.log("> verbose")
    }
    
}

export default new Verbose("verbose", '-v', 'verbeux', null, false);