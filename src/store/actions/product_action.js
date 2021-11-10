import { GET_PRODUCTS, ADD_PRODUCTS, ALERT_DETAIL, GET_POPULAR_PRODUCTS, PRODUCT_CATEGORY, PRODUCT_INVENTORY, PRODUCT_BRANDS, PRODUCT_BRAND_SEGMENTATION_PIE, PRODUCTS_EFFICIENCY_PROFILE } from '../types';
import API from '../../api';

export function getProducts(start, end) {
    return async dispatch => {
        API.get(`/GetProductDetails?Startdate=${start}&Enddate=${end}&ProductName=&ProductCategory=&ProductInventory=`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: GET_PRODUCTS, data: response.result })
            }
        });
    }
}

export function addProducts(self, data) {
    return async dispatch => {
        API.postFormData(`/AddProductDetails`, data).then(async (response) => {
            if (response.success === true) {
                self.props.history.push("/admin/products")
                dispatch({ type: ADD_PRODUCTS, data: true });
                self.setState({ loading: false })
                dispatch({ type: ALERT_DETAIL, data: true, message: "Product Added", severity: "success" })
            } else if (response.isSuccess === false) {
                self.setState({ loading: false })
                dispatch({ type: ALERT_DETAIL, data: true, message: response.message, severity: "error" })
            }
        }).catch(function (error) {
            self.setState({ loading: false })
            dispatch({ type: ALERT_DETAIL, data: true, message: error.message, severity: "error" })
        });
    }
}

export function productEfficiencyProfile(self, data) {
    return async dispatch => {
        API.postFormData(`/uploadEfficiencyProfile`, data).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: PRODUCTS_EFFICIENCY_PROFILE, data: response.result })
            }
        });
    }
}

export function getPopularProducts(start, end) {
    return async dispatch => {
        API.get(`/TopProductdetails?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: GET_POPULAR_PRODUCTS, data: response.result })
            }
        });
    }
}

export function getProductsCategory() {
    return async dispatch => {
        API.get(`/ProductCategory`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: PRODUCT_CATEGORY, data: response.result })
            }
        });
    }
}

export function getProductsInventory() {
    return async dispatch => {
        API.get(`/DropDown/GetDropDownList?Entity=Inventory`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: PRODUCT_INVENTORY, data: response.payload })
            }
        });
    }
}


export function getProductsBrands() {
    return async dispatch => {
        API.get(`/DropDown/GetDropDownList?Entity=Brands`).then(async (response) => {
            if (response.isSuccess === true) {
                dispatch({ type: PRODUCT_BRANDS, data: response.payload })
            }
        });
    }
}


export function getProductBrandSegmentation(start, end) {
    return async dispatch => {
        API.get(`/productBrandSegment?Startdate=${start}&Enddate=${end}`).then(async (response) => {
            if (response.success === true) {
                dispatch({ type: PRODUCT_BRAND_SEGMENTATION_PIE, data: response.result })
            }
        });
    }
}

export function getProductExport() {
    return async dispatch => {
        API.blobGet(`/ExportProductDetails`).then(async (response) => {
            try {
                var downloadLink = document.createElement("a");
                var url = URL.createObjectURL(response);
                downloadLink.href = url;
                downloadLink.download = "product.csv";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } catch {
                alert("Some thing went wrong. Please try again.")
            }
        });
    }
}