import {combineReducers, createStore} from "redux";
import {AuthReducer} from "./reducers/auth-reducer";
import {ErrorReducer} from "./reducers/error-reducer";
import {LoginReducer} from "./reducers/login-reducer";
import {NewPasswordReducer} from "./reducers/new-password-reducer";
import {PasswordRecoveryReducer} from "./reducers/password-recovery-reducer";
import { ProfileReducer } from "./reducers/profile-reducer";
import { RegisterReducer } from "./reducers/register-reducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    error: ErrorReducer,
    login: LoginReducer,
    newPassword: NewPasswordReducer,
    recover: PasswordRecoveryReducer,
    profile: ProfileReducer,
    register: RegisterReducer
})


export const store = createStore(rootReducer)