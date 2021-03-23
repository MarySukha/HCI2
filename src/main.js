import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import milk from "./images/milk.png"
import cheese from "./images/cheese.png"
import eggs from "./images/eggs.png"
import { withStyles } from "@material-ui/core/styles";
import InventoryList from "./inventory";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import NotificationIcon from '@material-ui/icons/Notifications';
import NoNotificationIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
};



class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Milk 2%",
          expires: "3",
          checked: true,
          image: milk
        },
        {
          name: "Cheese",
          expires: "4",
          checked: false,
          image: cheese
        },
        {
          name: "Eggs",
          expires: "6",
          checked: false,
          image: eggs
        }
      ]
    };
  }

  render_item(item, id) {
    let new_items = this.state.items;
    return(
      <Card className="inventory_item">
        <ListItem button>
          <ListItemAvatar>
            <Avatar 
              variant="square" 
              className={'product-image'}
              src={item.image}
            />
          </ListItemAvatar>
          <ListItemText 
            primary={item.name}
            secondary={"Expires in "+item.expires+" days"}
          />
          <ListItemSecondaryAction>
              <IconButton 
                onClick={()=> {
                  new_items[id].checked = !item.checked;
                  this.setState({items: new_items})
                }}
              >
                {item.checked ? <NoNotificationIcon/> : <NotificationIcon/>}
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      </Card>
    )
  }

  render() {
    const { classes } = this.props;
    return (
        <Card className="base" elevation={0}>
          <Grid className="inventory_grid" spacing={1}>
            {this.state.items.map((item, id) => this.render_item(item, id))}
          </Grid>
          <Fab color="secondary" aria-label="add" className="fab-add">
           <AddIcon />
          </Fab>
        </Card>
    );
  }
}

export default withStyles(styles)(MyComponent);