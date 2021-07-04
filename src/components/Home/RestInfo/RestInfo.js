import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../../store/StoreProvider";
//
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// route
import { useHistory } from "react-router-dom";

// component
import CardInfo from "../../common/CardInfo";
import CustomCarousel from "../../common/CustomCarousel";

// package
import queryString from "query-string";
//
import { getRestaurant, getMenus } from "../service";
import RestInfoStyle from "./RestInfoStyle";

const useStyles = makeStyles(RestInfoStyle);

const RestInfo = () => {
    // props

    // store
    const [state, dispatch] = useContext(StoreContext);

    // route
    const history = useHistory();
    const {
        location: { search, pathname },
    } = history;
    const { restId } = queryString.parse(search);

    // todo: 先以其中一筆資料測試,
    const [curRest, setCutRest] = useState(null);
    // style
    const classes = useStyles();
    // local state
    const [carouselImgUrls, setCarouselImgUrls] = useState(null);
    const [thumbImgUrls, setThumbImgUrls] = useState(null);
    const [largeImgUrls, setLargeImgUrls] = useState(null);

    const handleGoBack = () => {
        history.go(-1);
    };

    // 取得餐廳資訊
    useEffect(() => {
        if (!restId) return null;
        // fetch API to get restaurant data
        getRestaurant(restId, dispatch)
            .then((data) => {
                setCutRest(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // 取得餐廳的菜單
    useEffect(() => {
        if (!restId) return null;
        // fetch API to get restaurant data
        getMenus(restId, dispatch)
            .then((data) => {
                const { normalImgUrls, thumbImgUrls, largeImgUrls } = data;
                setCarouselImgUrls(normalImgUrls);
                setThumbImgUrls(thumbImgUrls);
                setLargeImgUrls(largeImgUrls);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //
    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {curRest && (
                    <React.Fragment>
                        <Grid item container justify="flex-start">
                            <Grid item>
                                <Box
                                    mt={3}
                                    mx={2}
                                    display="flex"
                                    alignItems="setCurrentKeyword"
                                    onClick={() => handleGoBack()}
                                >
                                    <ArrowBackIcon />
                                    <Typography variant="body1">
                                        Go back
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box mt={4}>
                                <CardInfo
                                    restaurant={curRest}
                                    // handleInfoClick={handleInfoClick}
                                    // handleImgClick={handleImgClick}
                                    // handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box my={2} className={classes.divider} />
                        </Grid>
                        <Grid item container justify="flex-start">
                            <Box my={2} mx={2} textAlign="left">
                                <Typography variant="h6">餐廳資訊</Typography>
                                <Typography variant="body2">
                                    {curRest.tel}
                                </Typography>
                                <Typography variant="body2">
                                    {curRest.category}
                                </Typography>
                                <Typography variant="caption">
                                    {curRest.description}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box my={2} className={classes.divider} />
                        </Grid>
                        <Grid item container justify="flex-start">
                            <Grid item xs={12}>
                                <Box mt={2} mb={1} mx={2} textAlign="left">
                                    <Typography variant="h6">菜單</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={1} mb={2} mx={2}>
                                    <CustomCarousel
                                        carouselImgUrls={carouselImgUrls}
                                        thumbImgUrls={thumbImgUrls}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box height="80px" />
                        </Grid>
                    </React.Fragment>
                )}
            </Grid>
        </React.Fragment>
    );
    // return <CustomCarousel />;
};
export default RestInfo;
