import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Main from "./Main";

import LogIn from "./Login";
import SignUp from "./SignUp";
import Items from "./Items";

export default function RouteWrapper() {

    return (
        <Router>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/signup'>
                    <Main>
                        <SignUp />
                    </Main>
                </Route>
                <Route path='/items/:category' component={Items} />
                <Route path='/'>
                    <Main>
                        <LogIn />
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}