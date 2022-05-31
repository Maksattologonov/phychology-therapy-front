import Profile from "admin_panel/components/pages/profile";
import Admissions from "admin_panel/components/pages/admissions";
import Forums from "admin_panel/components/pages/forums";
import Publications from "admin_panel/components/pages/publications";
import Archive from "admin_panel/components/pages/archive";
import Users from "admin_panel/components/pages/users";
import React from "react";

export const admin_routes = [
    {path: '/admin/profile', component: <Profile/>, exact: true},
    {path: '/admin/publications', component: <Publications/>, exact: true},
    {path: '/admin/admissions', component: <Admissions/>, exact: true},
    {path: '/admin/forums', component: <Forums/>, exact: true},
    {path: '/admin/users', component: <Users/>, exact: true},
    {path: '/admin/archive', component: <Archive/>, exact: true},
];


