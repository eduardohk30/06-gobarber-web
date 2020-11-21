import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

/* Condições do render:
 * isPrivate - isSigned
 *    true       true = OK
 *    true       false = Redirecionar ele pro login
 *    false      true = Redirecionar ele pro Dashboard
 *    false      false = OK
 */

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
