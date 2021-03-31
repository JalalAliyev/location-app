import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';
import LoadingSpinner from './shared/components/UI-elements/spinner/loading-spinner.component';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component'

const Users = lazy(() => import('./user/pages/users.page'));
const NewPlace = lazy(() =>
  import('./places/pages/new-place/new-place.page'),
);
const UserPlaces = lazy(() =>
  import('./places/pages/user-places/user-places.page'),
);
const UpdatePlace = lazy(() =>
  import('./places/pages/update-place/update-place.page'),
);
const Auth = lazy(() => import('./user/pages/auth/auth.page'));

const App = () => {
  const { token, userId, login, logout } = useAuth();
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, userId, login, logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }>
            {!token ? (
              <Switch>
                <Route path="/" exact component={Users} />
                <Route
                  path="/auth"
                  component={Auth}
                /> <Redirect to="/auth" />{' '}
              </Switch>
            ) : (
              <Switch>
                <Route path="/" exact component={Users} />
                <Route path="/places/new" exact component={NewPlace} />
                <Route path="/:userId/places" component={UserPlaces} />
                <Route path="/places/:placeId" component={UpdatePlace} />
                <Redirect to="/" />{' '}
              </Switch>
            )}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
