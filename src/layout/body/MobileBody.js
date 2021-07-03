import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const MobileBody = ({ component: Component, authorize }) => {
    /** 可以設定 RWD: mobile 整體樣式 */
    return (
        <Box
            height="calc(100vh - 124px)"
            overflow="auto"
            style={{ height: "fill-available" }}
        >
            <Container>
                <Component />
            </Container>
        </Box>
    );
};

export default MobileBody;
