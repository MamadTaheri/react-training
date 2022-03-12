import {
  alpha,
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  },
  input: {
      color: "white",
      marginLeft: theme.spacing(1),
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="h2" className={classes.logoLg}>
          Mamad Taheri
        </Typography>
        <Typography variant="h6" component="h2" className={classes.logoSm}>
          M . T
        </Typography>
        <div className={classes.searchBox}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
