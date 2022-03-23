import {FORM, HOME, PSYCHOLOGIST, WORK_WITH_WEBSITE} from "../types/RouteTypes";

export const publicRoutes = [
    {url: '/', type: HOME, exact: true},
    {url: '/home', type: HOME, exact: true},
    {url: '/psychologist', type: PSYCHOLOGIST, exact: true},
    {url: '/form', type: FORM, exact: true},
    {url: '/work-with-website', type: WORK_WITH_WEBSITE, exact: true},
]

export const privateRoutes=[

]