import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  TextField,
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
}));

const FormPersonalDetails = (props) => {
  const continueFunction = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const backFunction = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.titr} variant="h6">
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <TextField
          label="Enter Your Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          label="Enter YourCity"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          label="Enter Your Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
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

export default FormPersonalDetails;
