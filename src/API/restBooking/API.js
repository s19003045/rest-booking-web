import { isProduction, isDevelopment } from "../../common";
import config from "../../config/web";
import devConfig from "../../config/web.dev";

const domain = isDevelopment() ? devConfig.domain : config.domain;

const API = {
    domain: domain,
    // testing API
    test: () => `${domain}/test`,
    //
    getRestaurant: () => `${domain}/restaurant?id={id}`,
    getRestaurants: () =>
        `${domain}/restaurants?limit={limit}&offset={offset}&type={type}`,
    getMenus: () => `${domain}/restaurant/menus?id={id}`,
    // search
    searchRestByKeyword: () => `${domain}/search?keyword={keyword}`,
};

export default API;
