import registrationReducer from "./authReducers/registration";
import authorizationReducer from "./authReducers/autherization";
import {combineReducers} from "redux";
import userReducer from "./userReducers/userReducer";
import userAppointmentReducer from "./userReducers/userAppointmentReducer";
import verified from "./authReducers/verified";
import forum from "./forumReducers/forum";
import publicationReducer from "./publicationReducers/publicationReducer";


const rootReducer = combineReducers({
    registration_state: registrationReducer,
    authorization_state: authorizationReducer,
    user_state: userReducer,
    appointment_state: userAppointmentReducer,
    verified_state: verified,
    publication_state: publicationReducer,
    form_state: forum
})

export default rootReducer;