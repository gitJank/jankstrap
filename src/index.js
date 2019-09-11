import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  inputProps: {
    height: "14px",
    fontSize: "14px",
    padding: "12px"
  },
  emptyLabelProps: {
    marginTop: "-8px"
  },
  labelProps: { marginTop: "0px" },
  searchButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

const SearchBar = ({ searchBy, onFilterTextChange }) => {
  const classes = useStyles();

  return (
    <TextField
      id="search-feild"
      data-testid="search-feild"
      variant="outlined"
      label="Search"
      value={searchBy}
      onChange={e => onFilterTextChange(e.target.value)}
      InputProps={{
        classes: {
          input: classes.inputProps
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              className={classes.searchButton}
              edge="end"
              aria-label="search-button"
              onClick={() => {}}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      InputLabelProps={{
        classes: {
          root: !searchBy ? classes.emptyLabelProps : classes.labelProps,
          focused: classes.labelProps
        }
      }}
    />
  );
};

SearchBar.propTypes = {
  searchBy: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired
};

export default SearchBar;
