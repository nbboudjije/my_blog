import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Avatar,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import { useState } from "react";
import { Cancel } from "@material-ui/icons";

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
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icon: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography varient="h6" className={classes.logoLg}>
            Nadjib Blog
          </Typography>
          <Typography varient="h6" className={classes.logoSm}>
            NADJIB
          </Typography>

          <div className={classes.search}>
            <Search />
            <InputBase className={classes.input} placeholder="Seaerch..." />
            <Cancel
              className={classes.cancel}
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>

          <div className={classes.icon}>
            <Search
              className={classes.searchButton}
              onClick={() => {
                setOpen(true);
              }}
            />
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={6} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar alt="Remy Sharp" src="" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
