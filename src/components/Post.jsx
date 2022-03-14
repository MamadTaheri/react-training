import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import b from "../assets/b.jpg";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
        height: 150,
    }
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={b}
          title="test Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First Post</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, voluptatem eius consequatur vitae laboriosam qui
            cumque, magnam mollitia similique fugit quaerat eum nemo ut
            veritatis tempore soluta quas in deserunt?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, voluptatem eius consequatur vitae laboriosam qui
            cumque, magnam mollitia similique fugit quaerat eum nemo ut
            veritatis tempore soluta quas in deserunt?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More...</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
