import React from "react";
import "./App.css";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../bll/store";
import {Main} from "./Main";

export const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}


