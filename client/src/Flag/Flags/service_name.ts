import Flag from '../Flag';
import execute from '../../Services/Execute'

class ServiceName extends Flag {

    execute(program: any): void {
        execute.service_name = program.service_name
    }

}

export default new ServiceName("service_name", '-sn', 'The name of the service whose change status', 'service_name', false);