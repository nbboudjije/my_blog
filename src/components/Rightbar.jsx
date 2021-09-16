import {
  makeStyles,
  Container,
  Typography,
  Avatar,
  ImageList,
  ImageListItem,
  Link,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: { fontSize: 16, fontWeight: 500, color: "#555" },
  link: {
    marginRight: theme.spacing(2),
  },
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Online Friends</Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title}>Gallery</Typography>
      <ImageList
        rowHeight={100}
        className={classes.imageList}
        cols={3}
        style={{ marginBottom: 20 }}
      >
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/mushroom.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/plant.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title}>Category</Typography>
      <Link href="#" className={classes.link} varient="body2">
        News
      </Link>
      <Link href="#" className={classes.link} varient="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} varient="body2">
        Marketing
      </Link>
      <Link href="#" className={classes.link} varient="body2">
        Trending
      </Link>
    </Container>
  );
}

export default Rightbar;
