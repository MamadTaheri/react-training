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
  }
}));

const FormUserDetails = (props) => {

  const continueFunction = (e) => {
      console.log("continueFunction")
    e.preventDefault();
    props.nextStep();
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
          <Typography className={classes.titr} variant="h6">Enter User Details</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <TextField
          label="Enter Your First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Enter Your Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Enter Your Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />

        <Button onClick={continueFunction}variant="contained" color="primary" className={classes.button}>
          Continue
        </Button>
      </div>
    </>
  );
};

export default FormUserDetails;
