import Flag from '../Flag';
import execute from '../../Services/Execute'

class ServiceAction extends Flag {

    execute(program: any): void {
        execute.service_action = program.service_action
    }
    
}

export default new ServiceAction("service_action", '-a', 'service_action', 'service_action', true);