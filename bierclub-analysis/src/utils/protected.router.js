import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';


/**
 * Proteccion de ruta
 * Si la ruta no esta autorizada redirige a login
 * @param  {Component} {component
 * @param  {} ...rest}
 */
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
          if(auth.isAuth()) {
            return <Component {...props} />;      
          } else {
              return <Redirect to={
                  {
                      pathname: "/login",
                      state: {
                          from: props.location
                      }
                  }
              }/>
          }
        
      }}
    />
  );
};
