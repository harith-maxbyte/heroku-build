import { ALERT_DETAIL, LOGIN_SUCCESS } from "../types"

const initialstate = {
    isAuthenticated: [],
    openAlert: false,
    alertSeverity: "",
    alertMessage: ""
}

export default function sessionReducer(state = initialstate, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.data
            }
        case ALERT_DETAIL:
            return {
                ...state,
                openAlert: action.data,
                alertSeverity: action.severity,
                alertMessage: action.message
            };
        default:
            return state;
    }
}