import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

export default createStore(reducer);