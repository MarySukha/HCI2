import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import milk from "./images/milk.png"
import cheese from "./images/cheese.png"
import eggs from "./images/eggs.png"
import { withStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import NotificationIcon from '@material-ui/icons/Notifications';
import NoNotificationIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  //these can be useful stylers and will show up in google results.
  //but usually you'll just use css
  root: {}
}

class Inventory_List extends Component {
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

  render(){
    const { classes } = this.props;
    return (
      <Grid className="inventory_grid">
        {this.state.items.map((item, id) => this.render_item(item, id))}
      </Grid>
    );
  }
}
export default withStyles(styles)(Inventory_List);