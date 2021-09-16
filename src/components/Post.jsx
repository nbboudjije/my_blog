import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "450px",
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="My Way to Canada New York Germany"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom varient="h5">
            My First Post
          </Typography>
          <Typography varient="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, aut
            minima velit soluta quaerat ducimus modi suscipit id sint tempora
            cumque ratione nobis, expedita deserunt, odio dignissimos quidem
            dolor dolorem? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quia, aut minima velit soluta quaerat ducimus modi suscipit id
            sint tempora cumque ratione nobis, expedita deserunt, odio
            dignissimos quidem dolor dolorem?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
