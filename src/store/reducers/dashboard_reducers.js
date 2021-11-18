import { DASHBOARD_DATA, DASHBOARD_POPULAR_PRODUCTS, DASHBOARD_CHART_DATA } from "../types"

const initialstate = {
    popularProducts: [],
    dashboardData: [],
    chartData: []
}

export default function dashboard_reducers(state = initialstate, action) {
    switch (action.type) {
        case DASHBOARD_POPULAR_PRODUCTS:
            return {
                ...state,
                popularProducts: action.data
            }
        case DASHBOARD_DATA:
            return {
                ...state,
                dashboardData: action.data
            }
        case DASHBOARD_CHART_DATA:
            return {
                ...state,
                chartData: action.data
            }
        default:
            return state;
    }
}