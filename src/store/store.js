import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';


const middleWares = [logger]

// process.env.NODE_ENV === 'development' && logger
// .filter(
//   Boolean
// );

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);