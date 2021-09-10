import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import RouteEnum from '../constants/RouteEnum';
import MainNav from './components/main-nav/MainNav';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import Toasts from './components/toasts/Toasts';

const HomePage = lazy(() => import('./note-page/NotePage'));
const TagPage = lazy(() => import('./tag-page/TagPage'));
const NotFoundPage = lazy(() => import('./not-found-page/NotFoundPage'));

export default class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Suspense fallback={<LoadingIndicator isActive={true} />}>
          <MainNav />
          <Switch>
            <Route exact={true} path={RouteEnum.Note} component={HomePage} />
            <Route path={RouteEnum.Tag} component={TagPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Toasts />
        </Suspense>
      </ConnectedRouter>
    );
  }
}
