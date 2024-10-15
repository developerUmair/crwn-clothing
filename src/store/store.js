import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
