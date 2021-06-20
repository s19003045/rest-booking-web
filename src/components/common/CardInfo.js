import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { rest } from "lodash";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const CardInfo = ({
    restaurant,
    handleInfoClick,
    handleImgClick,
    handleCheckboxChange,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    width="100%"
                    image={restaurant.imgUrl}
                    title="Contemplative Reptile"
                    onClick={(e) => {
                        if (handleImgClick) handleImgClick(e, restaurant);
                    }}
                />
                <CardContent>
                    <Box
                        onClick={(e) => {
                            if (handleInfoClick) {
                                console.log("click");
                                handleInfoClick(e, restaurant);
                            }
                        }}
                    >
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                        >
                            <Grid
                                item
                                container
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs={10}>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle1"
                                    >
                                        {restaurant && restaurant.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Checkbox
                                        checked={restaurant.checked}
                                        onChange={(e) =>
                                            handleCheckboxChange(e, restaurant)
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                >
                                    {restaurant && restaurant.address}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions> */}
        </Card>
    );
};

export default CardInfo;
