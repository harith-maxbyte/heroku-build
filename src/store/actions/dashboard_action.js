import { DASHBOARD_DATA, DASHBOARD_POPULAR_PRODUCTS, DASHBOARD_CHART_DATA } from '../types';
import API from '../../api';

export function getDasboardData(start, end) {
    return async dispatch => {
        API.get(`/GetDashboardDetails?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            console.log("response=", response)
            if (response.success === true) {
                dispatch({ type: DASHBOARD_DATA, data: response })
            }
        });
    }
}

export function getTopSellingProducts() {
    return async dispatch => {
        API.get(`/Product/GetPopularProducts`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: DASHBOARD_POPULAR_PRODUCTS, data: response.payload })
            }
        });
    }
}


export function getChartData(start, end) {
    return async dispatch => {
        API.get(`/getDashBoardChart?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: DASHBOARD_CHART_DATA, data: response })
            }
        });
    }
}
