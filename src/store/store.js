import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { loginMiddleware, bootstrapMiddleware, logoutMiddleware } from '../components/middleware';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(loginMiddleware, bootstrapMiddleware, logoutMiddleware),
));
