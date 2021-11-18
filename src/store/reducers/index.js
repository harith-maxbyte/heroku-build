import { combineReducers } from "redux";
import sessionReducer from "./session"
import products_reducers from "./products_reducers"
import orders_reducers from "./orders_reducers"
import customer_reducers from "./customer_reducers"
import dashboard_reducers from "./dashboard_reducers"

export const rootReducer = combineReducers({
    sessionReducer,
    products_reducers,
    orders_reducers,
    dashboard_reducers,
    customer_reducers
})