import Flag from '../Flag';
import execute from '../../Services/Execute'

class Vote extends Flag {

    execute(program: any): void {
        execute.vote = program.vote
    }

}

export default new Vote("vote", '-v', 'Vote of the service', 'vote', false);