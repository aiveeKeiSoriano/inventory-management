import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Main from "./Main";


import firebase from 'firebase/app'

import { useEffect } from "react";

export default function RouteWrapper() {

    const firebaseConfig = {
        apiKey: "AIzaSyC58Wz_JcWoae7cJUgPSqRc-TOdI8NwNs4",
        authDomain: "inventory-management-acfc9.firebaseapp.com",
        projectId: "inventory-management-acfc9",
        storageBucket: "inventory-management-acfc9.appspot.com",
        messagingSenderId: "59396824809",
        appId: "1:59396824809:web:f21714f7fd4446b7db1a78"
      };
    
    useEffect(() => firebase.initializeApp(firebaseConfig), [])

    return (
        <Router>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/'>
                    <Main />
                </Route>
            </Switch>
        </Router>
    )
}