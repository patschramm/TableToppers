import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/root_reducer";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const configureStore = (preloadedState = {}) => {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     composeEnhancers(applyMiddleware(thunk, logger))
//   );
// };

// export default configureStore;

// import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;
