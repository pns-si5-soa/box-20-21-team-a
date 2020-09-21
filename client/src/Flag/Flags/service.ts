import Flag from '../Flag';

class Service extends Flag {

    execute(program: any): void {
        console.log(">" + program.service)
    }
    
}

export default new Service("service", '-s', 'Execute le service', 'service', true);