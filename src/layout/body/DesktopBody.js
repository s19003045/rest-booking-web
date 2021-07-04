import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const DesktopBody = ({ component: Component, authorize }) => {
    /** 可以設定 RWD: desktop 整體樣式 */
    return (
        <Box height="calc(100vh - 124px)" overflow="auto">
            <Container>
                <Grid container justify="center">
                    <Box mt={5}>
                        <Typography variant="h2">僅支援行動版瀏覽</Typography>
                    </Box>
                </Grid>
                {/* <Component /> */}
            </Container>
        </Box>
    );
};

export default DesktopBody;
