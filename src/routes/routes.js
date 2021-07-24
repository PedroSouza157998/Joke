import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../pages/App";
import Login from "../pages/Login"
import Register from "../pages/Register";
import NewPost from "../pages/NewPost";
import User from "../pages/UserPage";
import MyContext from "../context/MyContext";

function Routes() {
    const [userId, setUserId] = React.useState()

    return (

        <BrowserRouter>
            <Switch>
                <MyContext.Provider value={{userId, setUserId}}>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/cadastro" component={Register} />
                    <Route path="/cadastro/piada" component={NewPost} />
                    <Route path="/user" component={User} />
                </MyContext.Provider>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;