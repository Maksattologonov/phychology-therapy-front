import {
    AUTH_AUTHENTICATION,
    AUTH_AUTHORIZATION, AUTH_FORGET_PASS, AUTH_REGISTRATION, AUTH_RESET_PASS, CONFIRM_EMAIL, EMPLOYEE_ACCOUNT,
    FORUM, FORUM_CATALOGS, FORUM_CHAT, FORUM_CREATING,
    CATALOGS_FORUMS_LIST, GALLERY, GALLERY_CATALOG_IMAGES,
    HOME,
    PSYCHOLOGIST, PSYCHOLOGIST_APPOINTMENT,
    PUBLICATIONS,
    PUBLICATIONS_PUBLICATION, USER, USER_ACCOUNT,
    WORK_WITH_WEBSITE
} from "../types/RouteTypes";

export const publicRoutes = [
    {url: '/', type: HOME, exact: true},
    {url: '/home', type: HOME, exact: true},
    {url: '/psychologist', type: PSYCHOLOGIST, exact: true},
    {url: '/psychologist/appointment', type: PSYCHOLOGIST_APPOINTMENT, exact: true},
    {url: '/publications', type: PUBLICATIONS, exact: true},
    {url: '/publications/publication/:id', type: PUBLICATIONS_PUBLICATION, exact: true},
    {url: '/gallery', type: GALLERY, exact: true},
    {url: 'gallery/catalog/:id/images', type: GALLERY_CATALOG_IMAGES, exact: true},
    {url: '/forum', type: FORUM, exact: true},
    {url: '/forum/catalogs', type: FORUM_CATALOGS, exact: true},
    {url: '/forum/catalog/:id/forums', type: CATALOGS_FORUMS_LIST, exact: true},
    {url: '/forum/:forum_id/chat', type: FORUM_CHAT, exact: true},
    {url: '/forum/create-new-forum', type: FORUM_CREATING, exact: true},
    {url: '/work-with-website', type: WORK_WITH_WEBSITE, exact: true},
]

export const authRoutes = [
    {url: '/auth/authorization', type: AUTH_AUTHORIZATION, exact: true},
    {url: '/auth/registration', type: AUTH_REGISTRATION, exact: true},
    {url: '/auth/authentication', type: AUTH_AUTHENTICATION, exact: true},
    {url: '/auth/forget-pass', type: AUTH_FORGET_PASS, exact: true},
    {url: '/auth/reset-pass', type: AUTH_RESET_PASS, exact: true},
    {url: '/auth/confirm/email', type: CONFIRM_EMAIL, exact: true}
]

export const userRoutes=[
    {url: '/user', type: USER, exact: true},
    {url: '/user/account', type: USER_ACCOUNT, exact: true},
    {url: '/employee/account', type: EMPLOYEE_ACCOUNT, exact: true},
]

export const adminRoutes=[
    {url: '/adm/account', type: '', exact: true}
]