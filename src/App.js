import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { styles } from "./css-common"

import AddMeeting from "./components/add-meeting.component";
import Meeting from "./components/meeting.component";
import MeetingList from "./components/meeting-list.component";

import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              MeetUp
            </Typography>
            <Link to={"/createMeeting"} className={classes.link}>
              <Typography variant="body2">
                Create Meeting
            </Typography>
            </Link>
            <Link to={"/meetings"} className={classes.link}>
              <Typography variant="body2">
                View Meetings
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>

          <Switch>
            <Route exact path={["/", "/meetings"]} component={MeetingList} />
            <Route exact path="/createMeeting" component={AddMeeting} />
            <Route path="/tutorials/:id" component={Meeting} />
          </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);