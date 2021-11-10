import { GET_ORDERS, GET_ORDERS_STATUS, GET_ORDERS_TYPE, ORDER_DASHBOARD_COUNT, GET_ORDER_STATUS_REPORTS_PIE } from "../types"

const initialstate = {
    allOrders: [],
    orderStatus: [],
    orderTypes: [],
    orderDashboardCount: [],
    piechartData:[]
}

export default function orders_reducers(state = initialstate, action) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                allOrders: action.data
            }
        case ORDER_DASHBOARD_COUNT:
            return {
                ...state,
                orderDashboardCount: action.data
            }
        case GET_ORDERS_STATUS:
            return {
                ...state,
                orderStatus: action.data
            }
        case GET_ORDERS_TYPE:
            return {
                ...state,
                orderTypes: action.data
            }
        case GET_ORDER_STATUS_REPORTS_PIE:
            return {
                ...state,
                piechartData: action.data
            }
        default:
            return state;
    }
}