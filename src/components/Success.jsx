import {
    AppBar,
    IconButton,
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
  
  const Success = (props) => {
    
    const classes = useStyles();
  
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.titr} variant="h6">
              Success
            </Typography>
          </Toolbar>
        </AppBar>
  
        <div className={classes.container}>
        <h1>Thank you for registration</h1>
        <p>You will be noticed soon</p>

  
        </div>
      </>
    );
  };
  
  export default Success;
  