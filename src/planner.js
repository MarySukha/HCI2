import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import cake from "./images/cake.jpg"
import bloody_mary from "./images/bloody_mary.jpg"
import omelette from "./images/omelette.jpg"
import { withStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {}
}

class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          day: "Monday",
          name: "Takout",
        },
        {
          day: "Tuesday",
          name: "Leftovers",
        },
        {
          day: "Wednesday",
          name: "Stirfry",
        },
        {
          day: "Thursday",
          name: "Chili",
        },
        {
          day: "Friday",
          name: "Mac & Cheese",
        }
      ]
    };
  }

  render_item(item) {
    return(
      <Card className="inventory_item">
        <ListItem button>
          <ListItemText 
            primary={item.day}
            secondary={item.name}
          />
        </ListItem>
      </Card>
    )
  }

  render(){
    const { classes } = this.props;
    return (
      <Grid className="inventory_grid">
        {this.state.items.map((item) => this.render_item(item))}
      </Grid>
    );
  }
}
export default withStyles(styles)(Planner);