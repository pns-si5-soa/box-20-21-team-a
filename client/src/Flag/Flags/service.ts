import Flag from '../Flag';
import execute from '../../Services/Execute'

class Service extends Flag {

    execute(program: any): void {
        execute.service = program.service
    }
    
}

export default new Service("service", '-s', 'Execute le service', 'service', true);