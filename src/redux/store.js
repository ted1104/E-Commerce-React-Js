import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-redux";
import { persistStore } from "redux-persist";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  //this for display logger in console when we are developping
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// export default { store, persistor };
