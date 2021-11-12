import React from "react"
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "../../../features/auth/error/Error404";
import {Login} from "../../../features/auth/login/Login";
import {Profile} from "../../../features/auth/profile/Profile";
import {PasswordRecovery} from "../../../features/auth/password-recovery/Password-recovery";
import {NewPassword} from "../../../features/auth/new-password/New-password";
import {Register} from "../../../features/auth/register/Register";
import {Auth} from "../../../features/auth/authPage/Auth";
import {Test} from "../../../features/test/Test";


export const PATH = {
    LOGIN: "/login",
    AUTH: "/auth",
    REGISTER: "/register",
    "404": "/error",
    PROFILE: "/profile",
    PASSWORD: "/password",
    NEW_PASSWORD: "/new_password",
    TEST:"/test"
}


export const RoutesPage = () => {
    return (
        <div>
            <Routes>

                <Route path={"/"} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.AUTH} element={<Auth/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD} element={<PasswordRecovery/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH["404"]} element={<Error404/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>

            </Routes>
        </div>
    )
}