import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { makeStyles, TableCell } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        top: "64px",
        "& .MuiTabs-scroller.MuiTabs-fixed span": {
            height: "5px",
        },
    },
}));

const NavTab = ({ tabs, handleTabChange, curTab }) => {
    const classes = useStyles();

    //
    const [val, setVal] = useState(curTab || 0);

    const handleChange = (event, newValue) => {
        setVal(newValue);
        handleTabChange(newValue);
    };

    return (
        <AppBar className={classes.root} position="fixed">
            <Paper square variant="elevation" elevation={0}>
                <Tabs
                    value={val}
                    indicatorColor="secondary"
                    textColor="inherit"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    variant="fullWidth"
                >
                    {tabs &&
                        Object.values(tabs).map((tab) => {
                            return (
                                <Tab
                                    key={tab.key}
                                    label={tab.label}
                                    icon={tab.icon}
                                />
                            );
                        })}
                </Tabs>
            </Paper>
        </AppBar>
    );
};

export default NavTab;
