import API from "../../API/restBooking/API";
import axios from "axios";
import Act from "../../store/action";
// todo: 先使用 mock data, 待 API 完成後要移除
import {
    allRestList,
    newRestList,
    findRestByKeyword,
    genFakeImgUrls,
    imgSize,
} from "./mockData";

export const searchRestByKeyword = (keyword, dispatch) => {
    if (!(keyword && typeof keyword === "string")) return null;
    const url = API.searchRestByKeyword().replace("{keyword}", keyword.trim());

    if (dispatch) {
        dispatch({
            type: Act.PUSH_SEARCH_QUERY,
            payload: url,
        });
    }

    return new Promise((resolve, reject) => {
        // todo: 先使用 mock data, 待 API 完成後要移除
        const restFind = findRestByKeyword(allRestList, keyword.trim(), "name");
        if (dispatch) {
            dispatch({
                type: Act.REMOVE_SEARCH_QUERY,
                payload: url,
            });
        }

        resolve(restFind);

        /** todo: fetch API */
        // axios
        //     .get(url)
        //     .then((res) => {
        //         resoleve(res.data);
        //     })
        //     .catch((err) => reject(err));
    });
};

export const getRestaurant = (id, dispatch) => {
    if (!(id && typeof id === "string")) return null;
    const url = API.getRestaurant().replace("{id}", id);

    if (dispatch) {
        dispatch({
            type: Act.PUSH_SEARCH_QUERY,
            payload: url,
        });
    }

    return new Promise((resolve, reject) => {
        // todo: 先使用 mock data, 待 API 完成後要移除
        const randomId = Math.floor(Math.random() * allRestList.length);

        const restFind = allRestList[randomId];
        if (dispatch) {
            dispatch({
                type: Act.REMOVE_SEARCH_QUERY,
                payload: url,
            });
        }

        resolve(restFind);

        /** todo: fetch API */
        // axios
        //     .get(url)
        //     .then((res) => {
        //         resoleve(res.data);
        //     })
        //     .catch((err) => reject(err));
    });
};

export const restaurantType = {
    new: "new",
    all: "all",
};

export const getRestaurants = (type, dispatch) => {
    if (!(type && Object.values(restaurantType).indexOf(type) >= 0)) {
        type = restaurantType.all;
    }

    const url = API.getRestaurants()
        .replace("{limit}", -1)
        .replace("{offset}", 0)
        .replace("{type}", type);

    if (dispatch) {
        dispatch({
            type: Act.PUSH_SEARCH_QUERY,
            payload: url,
        });
    }

    return new Promise((resolve, reject) => {
        // todo: 先使用 mock data, 待 API 完成後要移除
        const restFind =
            type === restaurantType.all ? allRestList : newRestList;

        if (dispatch) {
            dispatch({
                type: Act.REMOVE_SEARCH_QUERY,
                payload: url,
            });
        }

        resolve(restFind);

        /** todo: fetch API */
        // axios
        //     .get(url)
        //     .then((res) => {
        //         resoleve(res.data);
        //     })
        //     .catch((err) => reject(err));
    });
};

export const getMenus = (restId, dispatch) => {
    if (!restId) return Promise.reject(new Error("parameter error"));

    const url = API.getMenus().replace("{id}", restId);

    if (dispatch) {
        dispatch({
            type: Act.PUSH_SEARCH_QUERY,
            payload: url,
        });
    }

    return new Promise((resolve, reject) => {
        // todo: 先使用 mock data, 待 API 完成後要移除
        const normalImgUrls = genFakeImgUrls(10, imgSize.normal.name);
        const thumbImgUrls = genFakeImgUrls(10, imgSize.small.name);
        const largeImgUrls = genFakeImgUrls(10, imgSize.large.name);

        if (dispatch) {
            dispatch({
                type: Act.REMOVE_SEARCH_QUERY,
                payload: url,
            });
        }

        resolve({ normalImgUrls, thumbImgUrls, largeImgUrls });

        /** todo: fetch API */
        // axios
        //     .get(url)
        //     .then((res) => {
        //         resoleve(res.data);
        //     })
        //     .catch((err) => reject(err));
    });
};
