import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardInfo from "../common/CardInfo";

// route
import { useHistory } from "react-router-dom";
// store
import { StoreContext } from "../../store/StoreProvider";
import Act from "../../store/action";
//
import SearchBar from "./searchComp";
// package
import queryString from "query-string";
// service
import { searchRestByKeyword } from "./service";

// mock data
import { allRestList } from "./mockData";

// 搜尋類別
const CLASS_TYPE = {
    default: "default",
};

const SERACH_STATE = {
    initial: "initial",
    searching: "searching",
    finishSearch: "finishSearch",
};

const Search = ({ restList }) => {
    // props
    // mock data: 在 API 建立前先用假資料
    restList = allRestList;

    // store
    const [state, dispatch] = useContext(StoreContext);
    const { home } = state;
    const { startSearch, searchQuery } = home;

    // route
    const history = useHistory();
    const {
        location: { search, pathname },
    } = history;
    const { keyword } = queryString.parse(search);

    // global
    // local state
    const [currentKeyword, setCurrentKeyword] = useState(keyword);
    const [preKeyword, setPreKeyword] = useState(""); // 前次搜尋關鍵字
    const [disableSearch, setDisableSearch] = useState(false);
    const [defaultValue] = useState(keyword || "");
    const [curRestList, setCurRestList] = useState(null);
    const [searchState, setSearchState] = useState(SERACH_STATE.initial);
    const [curClassType, setCurClassType] = useState(CLASS_TYPE.default);
    const [preCurClassType, setPreCurClassType] = useState(CLASS_TYPE.default);

    const handleInputChange = (e) => {
        setCurrentKeyword(e.target.value.trim());
        dispatch({
            type: Act.SET_SEARCH_VALUE,
            payload: e.target.value.trim(),
        });
    };

    const handleSearch = (val = "start") => {
        // 若此次搜尋關鍵字與前次搜尋關鍵字相同 or classType 未變動, 則不搜尋
        if (preKeyword === currentKeyword && curClassType === preCurClassType)
            return;
        if (currentKeyword === "") {
            // todo: 提示訊息, 請輸入關鍵字
            return;
        }

        // 清空前次搜尋的資料

        // 開始搜尋
        dispatch({
            type: Act.START_SEARCH,
            payload: true,
        });
        // 隨便塞一個 val 至 searchQuery 陣列中,
        dispatch({
            type: Act.PUSH_SEARCH_QUERY,
            payload: val,
        });
        // 開始搜尋時, 則把此次搜尋關鍵字存進 preKeyword, 供下次搜尋時比對
        setPreKeyword(currentKeyword);
        // 開始搜尋時, 則把 curClassType 存進 preCurClassType, 供下次搜尋時比對
        // setPreCurClassType(curClassType);
        //
        setTimeout(() => {
            dispatch({
                type: Act.REMOVE_SEARCH_QUERY,
                payload: val,
            });
        }, 1000);
    };

    const handleInputKeyUp = (e) => {
        if (e.key === "Enter") {
            handleSearch();
            // do something when press enter
            // console.log('handleInputKeyUp', e);
            // fullArtSearchLitTheme({ searchDispatch, ms: 'MSAborigines', keyword: currentKeyword });
        }
    };

    // const handleClassTypeChange = (e) => {
    //     setCurClassType(e.target.value);
    // };

    // 如果 url 的 query string 有帶 keyword, 則開始搜尋
    if (keyword && keyword !== "") {
        // 開始搜尋
        handleSearch();
    }

    // 清空 前次搜尋結果
    useEffect(() => {
        dispatch({
            type: Act.SET_CUR_RESULT,
            payload: null,
        });
    }, []);

    useEffect(() => {
        if (startSearch) {
            setSearchState(SERACH_STATE.searching);
            // todo: 暫時先以假資料測試
            searchRestByKeyword(currentKeyword, dispatch)
                .then((data) => {
                    // set local state
                    setCurRestList(data);
                    // set to store
                    dispatch({
                        type: Act.SET_CUR_RESULT,
                        payload: data,
                    });
                })
                .catch((err) => {
                    // todo: set message for user

                    console.log(err);
                })
                .finally(() => {
                    // set to store
                    dispatch({
                        type: Act.START_SEARCH,
                        payload: false,
                    });
                    setSearchState(SERACH_STATE.finishSearch);
                });
        }
    }, [startSearch]);

    useEffect(() => {
        if (searchQuery && searchQuery.length === 0) {
            setDisableSearch(false);
        } else {
            setDisableSearch(true);
        }
    }, [searchQuery]);

    const handleInfoClick = (e, restaurant) => {
        history.push({
            pathname: "restInfo",
            search: `restId=${restaurant.id}`,
        });
    };

    const handleImgClick = (e, restaurant) => {
        history.push({
            pathname: "restInfo",
            search: `restId=${restaurant.id}`,
        });
    };

    const handleCheckboxChange = (e, restaurant) => {
        // console.log("handleCheckboxChange", restaurant);
    };

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Box mt={1} mb={2}>
                        <SearchBar
                            useInputLabel
                            keyword={currentKeyword}
                            onChange={handleInputChange}
                            onSearch={handleSearch}
                            onKeyUp={handleInputKeyUp}
                            disabled={disableSearch}
                            defaultValue={defaultValue}
                            placeholder="請輸入關鍵字"
                        />
                    </Box>
                </Grid>
                <Grid item></Grid>
                {curRestList &&
                    Array.isArray(curRestList) &&
                    curRestList.map((rest) => (
                        <Box mb={2} key={rest.key}>
                            <Grid item key={rest.key}>
                                <CardInfo
                                    restaurant={rest}
                                    handleInfoClick={handleInfoClick}
                                    handleImgClick={handleImgClick}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Grid>
                        </Box>
                    ))}
                {searchState === SERACH_STATE.finishSearch &&
                    (!curRestList ||
                        (Array.isArray(curRestList) && curRestList).length ===
                            0) && (
                        <Box textAlign="center" mt={4}>
                            <Typography variant="h5">
                                抱歉！找不到符合的資訊
                            </Typography>
                        </Box>
                    )}
                {searchState === SERACH_STATE.initial && (
                    <Box textAlign="center" mt={4}>
                        <Typography variant="h5">請輸入關鍵字搜尋</Typography>
                    </Box>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default Search;
