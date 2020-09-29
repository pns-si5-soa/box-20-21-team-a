import Flag from '../Flag';
import execute from '../../Services/Execute'

class Data extends Flag {

    execute(program: any): void {
        execute.data = program.data
    }

}

export default new Data("data", '-d', 'Telemetry data', 'data', false);