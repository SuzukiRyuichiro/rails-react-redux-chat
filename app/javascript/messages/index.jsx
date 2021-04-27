// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  useParams
} from "react-router-dom";
import { createBrowserHistory as history } from "history";

// internal modules
import App from "./components/app";
// import "../assets/stylesheets/application.scss";
import messagesReducer from "./reducers/messages_reducer";
import channelsReducer from "./reducers/channels_reducer";

// State and reducers
const reducers = combinegstReducers({
  messages: messagesReducer,
  channels: channelsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <HashRouter history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/No%20Channel%20Selected" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
