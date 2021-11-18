import { GET_CUSTOMER_STATUS, GET_CUSTOMER_PLANS, GET_ALL_CUSTOMERS, GET_CUSTOMERS_OVERVIEW_COUNT, CUSTOMER_REPORT_STATUS_PIE } from '../types';
import API from '../../api';

export function getCustomerStatus() {
    return async dispatch => {
        API.get(`/DropDown/GetDropDownList?Entity=CustomerStatus`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: GET_CUSTOMER_STATUS, data: response.payload })
            }
        });
    }
}

export function getCustomerPlans() {
    return async dispatch => {
        API.get(`/DropDown/GetDropDownList?Entity=CustomerPlan`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: GET_CUSTOMER_PLANS, data: response.payload })
            }
        });
    }
}

export function getAllCustomers(start, end, status) {
    return async dispatch => {
        API.get(`/GetCustomerList?Startdate=${start}&Enddate=${end}${status === 'L' ? ('&CustomerType=' + status) : ''}${status === 'S' ? ('&PurchaseType=' + status) : ''}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: GET_ALL_CUSTOMERS, data: response.result })
            }
        });
    }
}

export function getCustomersViewCount(start, end) {
    return async dispatch => {
        API.get(`/GetCustomerOverviewTopCount?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: GET_CUSTOMERS_OVERVIEW_COUNT, data: response })
            }
        });
    }
}

export function getCustomersExport() {
    return async dispatch => {
        API.blobGet(`/ExportCustomerList`).then(async (response) => {
            try {
                var downloadLink = document.createElement("a");
                var url = URL.createObjectURL(response);
                downloadLink.href = url;
                downloadLink.download = "customer.csv";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } catch {
                alert("Some thing went wrong. Please try again.")
            }
        });
    }
}

export function getCustomersByDropdown(query) {
    return async dispatch => {
        API.get(`/Customer/GetCustomersList?${query}`).then(async (response) => {
            console.log(JSON.stringify(response))
            if (response.isSuccess === true) {
                dispatch({ type: GET_ALL_CUSTOMERS, data: response.payload })
            }
        });
    }
}


export function getCustomerStatusReports(start, end) {
    return async dispatch => {
        API.get(`/getCustomerChart?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: CUSTOMER_REPORT_STATUS_PIE, data: response })
            }
        });
    }
}