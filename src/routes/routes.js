import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../pages/App";
import Login from "../pages/Login"
import Register from "../pages/Register";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;