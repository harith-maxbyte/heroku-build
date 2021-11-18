import { GET_ORDERS, GET_ORDERS_STATUS, GET_ORDERS_TYPE, ORDER_DASHBOARD_COUNT, GET_ORDER_STATUS_REPORTS_PIE } from '../types';
import API from '../../api';

export function getOrders(start, end, status) {
    return async dispatch => {
        API.get(`/GetOrdersList?Startdate=${start}&Enddate=${end}&OrderType=S&OrderStatus=${status}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: GET_ORDERS, data: response.result })
            }
        });
    }
}

export function getOrdersDashboardCount(start, end) {
    return async dispatch => {
        API.get(`/GetOrdersOverviewTopCount?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: ORDER_DASHBOARD_COUNT, data: response })
            }
        });
    }
}

export function getOrdersStatus() {
    return async dispatch => {
        API.get(`/DropDown/GetDropDownList?Entity=OrderStatus`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: GET_ORDERS_STATUS, data: response.payload })
            }
        });
    }
}

export function getOrdersType() {
    return async dispatch => {
        API.get(`/DropDown/GetDropDownList?Entity=OrderType`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: GET_ORDERS_TYPE, data: response.payload })
            }
        });
    }
}

export function getOrderStatusReportSForPie(start, end) {
    return async dispatch => {
        API.get(`/getOrderChart?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: GET_ORDER_STATUS_REPORTS_PIE, data: response })
            }
        });
    }
}

export function getOrderExport() {
    return async dispatch => {
        API.blobGet(`/ExportOrdersList`).then(async (response) => {
            try {
                var downloadLink = document.createElement("a");
                var url = URL.createObjectURL(response);
                downloadLink.href = url;
                downloadLink.download = "order.csv";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } catch {
                alert("Some thing went wrong. Please try again.")
            }
        });
    }
}


export function getOrdersByDropdown(query) {
    return async dispatch => {
        API.get(`/Order/GetOrdersList?${query}`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: GET_ORDERS, data: response.payload })
            }
        });
    }
}