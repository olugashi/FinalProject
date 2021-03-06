import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Header from "./HeaderComponent";

//import Users from "./components/Users";
import Students from "./StudentsComponent";
import Schools from "./SchoolsMangmentComponent";
import AddSchool from "./AddSchoolComponent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header className={classes.appBar}></Header>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component={Link} to="/admin/students">
              <ListItemText primary="תלמידים" />
            </ListItem>

            <ListItem button component={Link} to="/admin/schools">
              <ListItemText primary="בתי ספר" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="שיבוץ" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="הגדרות" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path="/admin/students" component={Students} />
          <Route path="/admin/schools" component={Schools} />
        </Switch>
      </main>
    </div>
  );
};
export default AdminComponent;

// <Route exact path="/Admin/Student" component={Student} />
// <Route path="/Admin/Users" component={Users} />
