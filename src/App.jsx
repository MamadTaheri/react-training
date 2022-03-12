import { Button, makeStyles } from "@material-ui/core";
import { Person, TramSharp } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    color: "yellow",
    backgroundColor: theme.palette.success.dark
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<Person />}>سلام</Button>
      <Button variant="contained" color="secondary" startIcon={<TramSharp />}>علیک</Button>
      <Button variant="outlined" color="primary" style={{color: 'black'}}>محمد</Button>
      <Button variant="outlined" color="secondary" className={classes.button}>طاهری</Button>
    </div>
  );
};

export default App;