import { isProduction, isDevelopment } from "../../common";
import config from "../../config/web";
import devConfig from "../../config/web.dev";

const domain = isDevelopment() ? devConfig.domain : config.domain;

const API = {
    domain: domain,
    // testing API
    test: () => `${domain}/test`,
    //
    getRestaurant: () => `${domain}/api/restaurant?id={id}`,
    getRestaurants: () =>
        `${domain}/api/restaurants?limit={limit}&offset={offset}&type={type}`,
    getMenus: () => `${domain}/api/restaurant/menu?id={id}`,
    // search
    searchRestByKeyword: () => `${domain}/api/restaurants/search?keyword={keyword}`,
};

const apiConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

export { API, apiConfig };
