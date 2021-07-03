import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
    OutlinedInput,
    InputAdornment,
    InputLabel,
    IconButton,
    FormControl,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

const CssOutlinedInput = withStyles({
    root: {
        borderColor: "#c8c1b5",
        "&:focus": {
            borderColor: "#c8c1b5",
        },
        "&.Mui-focused": {
            borderColor: "#c8c1b5",
        },
        "& fieldset": {
            borderColor: "#c8c1b5",
        },
        "&:hover fieldset": {
            borderColor: "#c8c1b5",
        },
        "&.Mui-focused fieldset": {
            "&.MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline":
                {
                    borderColor: "#c8c1b5",
                },
        },
    },
})(OutlinedInput);

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
    },
}));

// eslint-disable-next-line no-unused-vars
const SearchBar = ({
    placeholder,
    label,
    defaultValue,
    onChange,
    onSearch,
    useInputLabel,
    onKeyUp,
    disabled,
}) => {
    //
    const defaultLabelWidth = 70;
    const defaultLabel = "關鍵字";
    //
    const [keyword, setKeyword] = useState("");
    //
    const classes = useStyles();
    //
    const handleSearch = () => {
        if (onSearch) onSearch(keyword);
    };
    //
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <FormControl variant="outlined" fullWidth>
                {useInputLabel && (
                    <InputLabel htmlFor="outlined-adornment-keyword-search">
                        {label || defaultLabel}
                    </InputLabel>
                )}
                <CssOutlinedInput
                    id="outlined-adornment-keyword-search"
                    // className="searchBar__search-input"
                    // className={classes.root}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setKeyword(e.target.value);
                        if (onChange) onChange(e);
                    }}
                    classes={{
                        root: classes.root,
                        focused: classes.focused,
                    }}
                    defaultValue={defaultValue}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="start search"
                                onClick={handleSearch}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    inputProps={{
                        onKeyUp,
                    }}
                    disabled={disabled}
                    labelWidth={useInputLabel ? defaultLabelWidth : 0}
                />
            </FormControl>
        </div>
    );
};

SearchBar.defaultProps = {
    placeholder: null,
    label: null,
    defaultValue: null,
    useInputLabel: false,
    disabled: false,
    onChange: null,
    onSearch: null,
    onKeyUp: null,
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    useInputLabel: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    onKeyUp: PropTypes.func,
};

export default SearchBar;
