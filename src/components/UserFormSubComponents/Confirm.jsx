import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "1rem"
  },
  button: {
    margin: 15,
  },
  titr: {
    margin: "2px auto",
  },
  listItems: {
    textAlign: "center",
  }
}));

const Confirm = (props) => {
  const continueFunction = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const backFunction = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values: { firstName, lastName, email, occupation, city, bio } } = props;

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.titr} variant="h6">
            Confirm User Data
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.container}>
        <List component="nav" aria-label="contacts">
          <ListItem className={classes.listItems}>
            <ListItemText primary="First Name:" secondary={firstName}/>
          </ListItem>
          <ListItem className={classes.listItems}>
            <ListItemText primary="Last Name:" secondary={lastName}/>
          </ListItem>
          <ListItem className={classes.listItems}>
            <ListItemText primary="Email :" secondary={email}/>
          </ListItem>
          <ListItem className={classes.listItems}>
            <ListItemText primary="Occupation:" secondary={occupation}/>
          </ListItem>
          <ListItem className={classes.listItems}>
            <ListItemText primary="City:" secondary={city}/>
          </ListItem>
          <ListItem className={classes.listItems}>
            <ListItemText primary="Bio:" secondary={bio}/>
          </ListItem>
        </List>

        <div>
          <Button
            onClick={backFunction}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Back
          </Button>
          <Button
            onClick={continueFunction}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Continue
          </Button>
        </div>

      </div>
    </>
  );
};

export default Confirm;
