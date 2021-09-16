import { makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.home} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.home} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.home} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.home} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.home} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
