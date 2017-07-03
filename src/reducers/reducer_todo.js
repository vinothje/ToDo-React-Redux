import { DELETETODO, LISTTODO, NEWTODO } from '../actions/index';
import _  from 'lodash';

export default function(state=[{todo_id: 1, todo_name: 'job1'},
                            {todo_id: 2, todo_name: 'job2'},
                            {todo_id: 3, todo_name: 'job3'}], action) {
    switch(action.type) {
        case LISTTODO :
            return state;
        case DELETETODO :
            return _.reject(state, action.payload);
        case NEWTODO :
            return [...state, action.payload];
        default :
            return state;
    }
}
