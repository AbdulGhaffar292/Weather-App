import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles({
  root: {
    // padding: '2px 4px',
    // display: 'flex',
    alignItems: 'center',
    float:'right'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

export default function SearchField() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search City"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
    
      <IconButton className={classes.iconButton} aria-label="Search" onClick="searchWeather">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}