import {
  FormControlLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { useState } from "react";
import { Container, FormLabel } from "react-bootstrap";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 500,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },

  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip
        title="Add"
        aria-label="add"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal open={open}>
        <Container className={classes.container}>
          <form
            className="classes.form"
            autoComplete="off"
            style={{ padding: "18px" }}
          >
            <div className="classes.item">
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />

              <TextField
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Tell Your Story..."
                variant="filled"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who Can Comment?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel
                  value="Everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio />}
                  label="(Disabled option)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                varient="outlined"
                color="primary"
                style={{ marginRight: "3px" }}
                onClick={() => {
                  setOpenAlert(true);
                }}
              >
                Create
              </Button>
              <Button
                varient="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
