import React, { useState, useContext, useReducer, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
//
import Box from "@material-ui/core/Box";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

// component
import NavTab from "../common/NavTab";
import AllList from "./AllList";
import NewList from "./NewList";
import Search from "./Search";

const tabs = {
    0: {
        key: "home-tab-01",
        label: "新增餐廳",
        icon: null,
        component: <NewList />,
    },
    1: {
        key: "home-tab-02",
        label: "餐廳清單",
        icon: null,
        component: <AllList />,
    },
    2: {
        key: "home-tab-03",
        label: null,
        icon: <SearchOutlinedIcon />,
        component: <Search />,
    },
};

const TabComponentHOC = ({ component: Component, restList }) => {
    return <Component restList={restList} />;
};

const Home = () => {
    // const store = useContext(StoreContext);
    //
    const [curTab, setCurTab] = useState(1);
    const [curRestList, setCurRestList] = useState([]);

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
            <Box mt="65px" mb="65px">
                {tabs && tabs[curTab] && (
                    <TabComponentHOC
                        component={() => tabs[curTab].component}
                        restList={curRestList}
                    />
                )}
            </Box>
        </React.Fragment>
    );
};
export default Home;
