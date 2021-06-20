import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";

// image
import avatar from "../../image/avatar-128/boy_icon-icons.com_55048.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const MobileHeader = ({ authorize }) => {
    const classes = useStyles();
    // todo: get auth state from store
    const [auth, setAuth] = useState(true);
    //
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /** 可以設定 RWD: mobile 整體樣式 */
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Grid container justify="space-between">
                        <Grid item>
                            <IconButton color="inherit">
                                <Typography variant="h6">
                                    <Box fontWeight="bold">LOGO</Box>
                                </Typography>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            {auth && (
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/image/avatar-128/boy_icon-icons.com_55048.png"
                                        />
                                        {/* <AccountCircle fontSize="large" /> */}
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            Profile
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            My account
                                        </MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MobileHeader;
