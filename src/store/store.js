import { createStore} from 'redux'
import counterReducer from './../reducers/plusminus';

const store = createStore(counterReducer)

export default store