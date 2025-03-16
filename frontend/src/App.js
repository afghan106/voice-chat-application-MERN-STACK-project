import "./App.css";

import Home from './pages/home/Home'; // Ensure this path is correct
// import Register from './pages/register/Register';nticate from './pages/Authenticate/Authenticate';
import Activate from "./pages/activate/Activate";
import Rooms from "./pages/rooms/Rooms";
import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import Authenticate from "./pages/Authenticate/Authenticate"
import Navigation from "./components/Shared/Navigation/Navigation"
// this variables for the testing after we are going to change them

const isAuth = false;

const user = {
  activated: false
}

function App() {
  return (
   
    <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        {/* this is the authenticated Area routes */}
        <GuestRoute path='/' exact>
          <Home />
        </GuestRoute>

        <GuestRoute path="/authenticate" exact>
          <Authenticate />
        </GuestRoute>

        
        {/* now this is the semi protected routes  */}
        <SemiProtectedRoute path='/activate' >
            <Activate/>
        </SemiProtectedRoute>

        {/* this protected routes */}
        <ProtectedRoute path='/rooms'>
          <Rooms/>
        </ProtectedRoute>




        {/* here is the register route */}
        {/* <Route path="/register" exact>
          <Register />
        </Route> */}
          {/* this is the login router where the authenticated user can interact */}
        {/* <Route path="/login" exact>
          <Authenticate/>
        </Route> */}
      </Switch>
    </BrowserRouter>


  )
}




// this is the guest area route component
const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => 
        isAuth ? (
          <Redirect 
            to={{
              pathname: "/rooms",
              state: { from: location }
            }} 
          />
        ) : (
          children
        )
      }
    />
  );
};

// this is the semi protect route component

const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}
    render = {({location})=> {
      return (
        !isAuth ?(
            <Redirect to={{
              pathname: '/',
              state:{from:location}
            }}
            />
        ) : (isAuth && !user.activated ? (
            children
          ) : (
              
            <Redirect to={{
              pathname: '/rooms',
              state:{from:location}
            }}
            />
          ))
            
          
      )
    }}
    />
  )
}

// this is the  protect route component

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}
    render = {({location})=> {
      return (
        !isAuth ?(
            <Redirect to={{
              pathname: '/',
              state:{from:location}
            }}
            />
        ) : (isAuth && !user.activated ? (
             
            <Redirect to={{
              pathname: '/activate',
              state:{from:location}
            }}
            />

          ) : (
              children
          ))
            
          
      )
    }}
    />
  )
}
export default App;