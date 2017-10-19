/**
 * Created by Administrator on 2017/10/19.
 */

import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

export default store;