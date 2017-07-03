import { DELETETODO, LISTTODO } from '../actions/index';
import _  from 'lodash';

export default function(state=[], action) {
    switch(action.type) {
        case LISTTODO :
            return [...action.payload];
        case DELETETODO :
            return _.reject(state, action.payload);
        default :
            return state;
    }
}
