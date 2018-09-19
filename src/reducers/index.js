import { combineReducers } from 'redux';
import PostReduser from './reducer-posts';
import { reducer as formReducer } from 'redux-form';
import { user } from './reducer-auth';

const rootReducer = combineReducers({
    post: PostReduser,
    form: formReducer,
    user
})

export default rootReducer;