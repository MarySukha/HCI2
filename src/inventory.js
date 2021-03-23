import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
  },
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Inventory_List extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root + " inventory-grid"}>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(Inventory_List);