import Flag from '../Flag';
import execute from '../../Services/Execute'

class Parameter_1 extends Flag {

    execute(program: any): void {
        execute.parameter_1 = program.parameter_1
    }

}

export default new Parameter_1("parameter_1", '-p1', 'first parameter', 'param1', false);