import { createStore } from "redux";
import reducer from "./reducers/index";
// 解决ts里面问题
declare let window: any
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;