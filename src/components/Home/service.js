import API from "../../API/restBooking/API";
import axios from "axios";
import Act from "../../store/action";
// todo: 先使用 mock data, 待 API 完成後要移除
import { allRestList, findRestByKeyword } from "./mockData";

export const searchRestByKeyword = (keyword, dispatch) => {
    if (!(keyword && typeof keyword === "string")) return null;
    const url = API.searchRestByKeyword().replace("{keyword}", keyword.trim());

    dispatch({
        type: Act.PUSH_SEARCH_QUERY,
        payload: url,
    });
    return new Promise((resolve, reject) => {
        // todo: 先使用 mock data, 待 API 完成後要移除
        const restFind = findRestByKeyword(allRestList, keyword.trim(), "name");
        dispatch({
            type: Act.REMOVE_SEARCH_QUERY,
            payload: url,
        });
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
