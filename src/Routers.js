import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "./containers/dashboard"
import Login from "./containers/login"
import Details from "./containers/details"
import cookie from 'cookie'


export default function Router() {

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }
  
    const ProtectedRoute = ({
        component: Component, ...rest
    }) => {
        return (
          <Route
          {...rest}
          render={(props) => checkAuth()
              ? <Component {...props} />
              : <Redirect to="/login" />}
          />
        )
      }
      
    return (
     
            <Switch>        
                <Route exact path="/" component={details}/>
                <Route path="/login" component={login}/>
                <Route path="/listings" component={details}/>
                <ProtectedRoute path="/dashboard" component={dashboard}/>
            </Switch>
       
       
    )
}