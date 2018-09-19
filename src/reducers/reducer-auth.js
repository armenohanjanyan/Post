import { LOG_IN, SIGN_UP, SIGN_OUT } from '../actions/index';
import _ from 'lodash';


export const user =  (state = {}, action) =>  {
    switch(action.type) {
        case LOG_IN:
          return action.payload.user
        case SIGN_UP:
          return action.payload.user
        case SIGN_OUT:
          return {}
        default:
          return state;

    }
}