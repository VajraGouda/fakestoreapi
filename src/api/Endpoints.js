import Constants from "./Constants";

const Endpoints = {
    PRODUCTS_URL: `${Constants.BASE_URL}products`,
    PRODUCT_BY_ID_URL: `${Constants.BASE_URL}products/ `,
    PRODUCT_WOMEN_URL: `${Constants.BASE_URL}products/category/women's clothing `,
    PRODUCT_MEN_URL: `${Constants.BASE_URL}products/category/men's clothing `,
    PRODUCT_ELECTRONICS_URL: `${Constants.BASE_URL}products/category/electronics `,
    PRODUCT_JEWELERY_URL: `${Constants.BASE_URL}products/category/jewelery `,
    REGISTER_URL: `${Constants.BASE_URL}users `,
    LOGIN_URL: `${Constants.BASE_URL}auth/login`,
    
}

export default Endpoints;