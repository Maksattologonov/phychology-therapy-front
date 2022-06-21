import registrationReducer from "./authReducers/registration";
import authorizationReducer from "./authReducers/autherization";
import {combineReducers} from "redux";
import userReducer from "./userReducers/userReducer";
import verified from "./authReducers/verified";
import forum from "./forumReducers/forum";
import publicationReducer from "./publicationReducers/publicationReducer";
import userInfoReducer from "./userInfoReducer";
import appointment from "./appointmentReducers/appointment";
import gallery from "./galleryReducers/gallery";


const rootReducer = combineReducers({
    registration_state: registrationReducer,
    authorization_state: authorizationReducer,
    user_state: userReducer,
    user_info: userInfoReducer,
    verified_state: verified,
    publication_state: publicationReducer,
    forum_state: forum,
    appointment_state: appointment,
    gallery_state: gallery
})

export default rootReducer;