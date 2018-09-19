import { FETCH_POST, SHOW_POST, LOG_IN } from '../actions/index';
import _ from 'lodash';


export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_POST:
          return { ...state, [action.payload.data.id]: action.payload.data }
        case FETCH_POST:
          return _.mapKeys(action.payload.data, 'id') 
        case LOG_IN:
          return _.mapKeys(action.payload.data, 'id') 
        default:
          return state;

    }
}