import registrationReducer from "./authReducers/registration";
import authorizationReducer from "./authReducers/autherization";
import reestablishPasswordReducer from "./authReducers/reestablishPassword";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    registration_state: registrationReducer,
    authorization_state: authorizationReducer,
    reestablish_state: reestablishPasswordReducer,

})

export default rootReducer;