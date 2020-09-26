import Flag from '../Flag';
import execute from '../../Services/Execute'

class Parameter_2 extends Flag {

    execute(program: any): void {
        execute.parameter_2 = program.parameter_2
    }

}

export default new Parameter_2("parameter_2", '-p2', 'first parameter', 'param2', false);