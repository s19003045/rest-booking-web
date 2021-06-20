import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardInfo from "../common/CardInfo";
// mock data
import { allRestList } from "./mockData";

const AllList = ({ restList }) => {
    // mock data: 在 API 建立前先用假資料
    restList = allRestList;

    const handleInfoClick = (e, restaurant) => {
        console.log("handleInfoClick", restaurant);
    };

    const handleImgClick = (e, restaurant) => {
        console.log("handleImgClick", restaurant);
    };

    const handleCheckboxChange = (e, restaurant) => {
        console.log("handleCheckboxChange", restaurant);
    };

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {restList &&
                    restList.map((rest) => (
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
