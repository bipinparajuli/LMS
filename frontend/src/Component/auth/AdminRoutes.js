import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { isAuthenticate } from './index';


const AdminRoute = ({ component:Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticate() && isAuthenticate().user.role === 1 ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoute
  
  