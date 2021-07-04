import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardInfo from "../common/CardInfo";
//
import { useHistory } from "react-router";
//
import { getRestaurants, restaurantType } from "./service";

const AllList = ({ restList }) => {
    // store
    const [state, dispatch] = useContext(StoreContext);

    // route
    const history = useHistory();
    const { location } = history;
    const { pathname, search, hash } = location;

    // local state
    const [curRests, setCurRests] = useState(null);

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

    useEffect(() => {
        // fetch API
        getRestaurants(restaurantType.all, dispatch)
            .then((data) => {
                setCurRests(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {curRests &&
                    curRests.map((rest) => (
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
            </Grid>
        </React.Fragment>
    );
};

export default AllList;
