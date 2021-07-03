import React, { useState, useContext, useReducer, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
//
import Box from "@material-ui/core/Box";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
// route
import { useHistory } from "react-router-dom";

// component
import NavTab from "../common/NavTab";
import AllList from "./AllList";
import NewList from "./NewList";
import Search from "./Search";
// package
import queryString from "query-string";

const tabs = {
    0: {
        key: "home-tab-01",
        label: "新增餐廳",
        name: "NewList",
        tabIdx: 0,
        icon: null,
        component: NewList,
    },
    1: {
        key: "home-tab-02",
        label: "餐廳清單",
        name: "AllList",
        tabIdx: 1,
        icon: null,
        component: AllList,
    },
    2: {
        key: "home-tab-03",
        label: null,
        name: "Search",
        tabIdx: 2,
        icon: <SearchOutlinedIcon />,
        component: Search,
    },
};

/**
 * 找出 tabs 中 tab.name 與 name 相同的 tab index
 * 使用 url 的 query string ?type={type} 直接顯示對應的 tab
 * @param {*} _tabs {Array || Object}
 * @param {*} name {String}
 * @returns
 */
const tabIndex = (_tabs, name) => {
    if (!name) return 0;
    if (!(Array.isArray(_tabs) || typeof _tabs === "object")) return 0;
    const findIndex = (tabsArray, _name) => {
        let index = 0;
        tabsArray.forEach((tab, idx) => {
            if (tab.name.toLowerCase() === _name.toLowerCase()) index = idx;
        });
        return index;
    };
    const tabs = Array.isArray(_tabs) ? _tabs : Object.values(_tabs);
    return findIndex(tabs, name);
};

const TabComponentHOC = ({ component: Component, restList }) => {
    return <Component restList={restList} />;
};

const Home = () => {
    // props

    // store
    const [state, dispatch] = useContext(StoreContext);

    // route
    const history = useHistory();
    const {
        location: { search, pathname },
    } = history;
    const { type } = queryString.parse(search);
    //
    const [curTab, setCurTab] = useState(tabIndex(tabs, type));
    const [curRestList, setCurRestList] = useState([]);

    //

    // TODO: get restaurant lsit from API
    // 依目前的 tab 切換 API
    useEffect(() => {
        // axios
        //     .get("url")
        //     .then((res) => {
        //         setCurRestList(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     }),
    }, []);

    const handleTabChange = (val) => {
        setCurTab(val);
    };
    return (
        <React.Fragment>
            <NavTab
                tabs={tabs}
                handleTabChange={handleTabChange}
                curTab={curTab}
            />
            <Box height="48px" />
            <Box pt="25px" pb="70px">
                {tabs && tabs[curTab] && (
                    <TabComponentHOC
                        // component={() => tabs[curTab].component}
                        component={tabs[curTab].component}
                        restList={curRestList}
                    />
                )}
            </Box>
        </React.Fragment>
    );
};
export default Home;
