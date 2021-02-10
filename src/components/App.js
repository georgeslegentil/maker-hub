import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
//import Dashboard from "./Dashboard"
import Login from "./Login"
//import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
//import UpdateProfile from "./UpdateProfile"
import Admin from "../layouts/Admin"

function App() {
    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route path = "/signup" component={Signup} />
                            <Route path = "/login" component={Login} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                            <Route path = "/admin" component={Admin} />
                            <Redirect from="/" to="/admin/dashboard" />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
            </Container>
        </AuthProvider>
    )
}

export default App;
