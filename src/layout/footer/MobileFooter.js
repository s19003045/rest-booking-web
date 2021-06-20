import React, { useState, useEffect } from "react";

// material-ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { makeStyles } from "@material-ui/core/styles";
// router
import { useLocation, useHistory } from "react-router-dom";

const gridStyles = makeStyles({
    root: {},
});

const footerBarList = {
    home: {
        key: "route-home",
        name: "home",
        path: "/",
        icon: <HomeOutlinedIcon fontSize="large" />,
    },
    user: {
        key: "route-about",
        name: "user",
        path: "/user",
        icon: <AccountCircleOutlined fontSize="large" />,
    },
    setting: {
        key: "route-setting",
        name: "setting",
        path: "/setting",
        icon: <MenuIcon fontSize="large" />,
    },
};

const RouteIconHOC = ({ icon: Icon, color }) => {
    return <Icon color="primary" />;
};

const MobileFooter = ({ authorize }) => {
    // route
    const location = useLocation();
    const { pathName } = location;
    const history = useHistory();
    // style
    const gridClasses = gridStyles;
    // local state
    const [curPath, setCurPath] = useState(pathName);

    // handle click route icon
    const handleRoute = (e, path) => {
        setCurPath(path);
        // go to page
        history.push(path);
    };

    // 取得 url 的路徑, save to curPath
    useEffect(() => {
        if (!location) return;
        setCurPath(location.pathname);
    }, [location.pathName]);

    /** 可以設定 RWD: mobile 整體樣式 */
    return (
        <Box
            position="absolute"
            bottom="0px"
            m={0}
            p={0}
            borderTop="1px solid #f2f2f2"
            width="100%"
            textAlign="center"
            color="#000"
            bgcolor="white"
        >
            <Grid container justify="space-between" alignItems="center">
                {footerBarList &&
                    Object.values(footerBarList).map((item) => (
                        <Grid item key={item.key}>
                            <IconButton
                                onClick={(e) => handleRoute(e, item.path)}
                                color={
                                    curPath === item.path
                                        ? "inherit"
                                        : "default"
                                }
                            >
                                <RouteIconHOC icon={() => item.icon} />
                            </IconButton>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

export default MobileFooter;
