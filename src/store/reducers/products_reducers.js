import { GET_POPULAR_PRODUCTS, GET_PRODUCTS, PRODUCT_BRANDS, PRODUCT_BRAND_SEGMENTATION_PIE, PRODUCT_CATEGORY, PRODUCT_INVENTORY, PRODUCTS_EFFICIENCY_PROFILE } from "../types"

const initialstate = {
    allProducts: [],
    popularProducts: [],
    productBrands: [],
    productCategories: [],
    productInventories: [],
    productsBrandSegmentationPie: [],
    productsEfficiencyProfile: []
}

export default function products_reducers(state = initialstate, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.data
            }
        case PRODUCT_BRAND_SEGMENTATION_PIE:
            return {
                ...state,
                productsBrandSegmentationPie: action.data
            }
        case GET_POPULAR_PRODUCTS:
            return {
                ...state,
                popularProducts: action.data
            }
        case PRODUCT_BRANDS:
            return {
                ...state,
                productBrands: action.data
            }
        case PRODUCT_CATEGORY:
            return {
                ...state,
                productCategories: action.data
            }
        case PRODUCTS_EFFICIENCY_PROFILE:
            return {
                ...state,
                productsEfficiencyProfile: action.data
            }
        case PRODUCT_INVENTORY:
            return {
                ...state,
                productInventories: action.data
            }
        default:
            return state;
    }
}