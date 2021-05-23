import {createStore} from 'redux'
import books from './reducer';

const store = createStore(books);

export default store
