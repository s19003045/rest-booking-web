import Home from "./components/Home/index";
import User from "./components/User/index";
import setting from "./components/setting";
import RestInfo from "./components/Home/RestInfo/RestInfo";
import CustomCarousel from "./components/common/CustomCarousel";
//
const routes = [
    {
        key: "route-home",
        name: "home",
        path: "/",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: Home,
    },
    {
        key: "route-rest-info",
        name: "rest-info",
        path: "/restInfo",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: RestInfo,
    },
    {
        key: "route-about",
        name: "user",
        path: "/user",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: User,
    },
    {
        key: "route-setting",
        name: "setting",
        path: "/setting",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: setting,
    },
];

export default routes;
