import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';


const rootReduser = combineReducers({
    router: routerReducer,
    users

});
export default rootReduser;
