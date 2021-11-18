import { GET_CUSTOMER_PLANS, GET_CUSTOMER_STATUS, GET_ALL_CUSTOMERS, GET_CUSTOMERS_OVERVIEW_COUNT, CUSTOMER_REPORT_STATUS_PIE } from "../types"

const initialstate = {
    customerPlans: [],
    customerStatus: [],
    allCustomers: [],
    coutomersOverviewCount: [],
    customerStatusReportsPie: []
}

export default function customers_reducers(state = initialstate, action) {
    switch (action.type) {
        case GET_ALL_CUSTOMERS:
            return {
                ...state,
                allCustomers: action.data
            }
        case CUSTOMER_REPORT_STATUS_PIE:
            return {
                ...state,
                customerStatusReportsPie: action.data
            }
        case GET_CUSTOMERS_OVERVIEW_COUNT:
            return {
                ...state,
                coutomersOverviewCount: action.data
            }
        case GET_CUSTOMER_PLANS:
            return {
                ...state,
                customerPlans: action.data
            }
        case GET_CUSTOMER_STATUS:
            return {
                ...state,
                customerStatus: action.data
            }
        default:
            return state;
    }
}