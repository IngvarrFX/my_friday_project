import React from "react"
import {NavLink} from "react-router-dom"
import {PATH} from "./routes/Routes";


export const Header = () => {
    return (
        <div>
            <span>  <NavLink to={PATH.LOGIN}> Login / </NavLink>  </span>
            <span>  <NavLink to={PATH.AUTH}> Auth / </NavLink>  </span>
            <span>  <NavLink to={PATH.REGISTER}> Register / </NavLink>  </span>
            <span>  <NavLink to={PATH.PROFILE}> Profile / </NavLink>  </span>
            <span>  <NavLink to={PATH.PASSWORD}> Password recovery / </NavLink>  </span>
            <span>  <NavLink to={PATH.NEW_PASSWORD}> Enter new password / </NavLink>  </span>
            <span>  <NavLink to={PATH["404"]}> 404 page not found / </NavLink>  </span>
            <span>  <NavLink to={PATH.TEST}> Test  / </NavLink>  </span>
        </div>
    )
}