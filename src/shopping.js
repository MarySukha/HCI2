import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const styles = {
  //these can be useful stylers and will show up in google results.
  //but usually you'll just use css
  root: {}
}

class Shopping_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "🧃 Juice",
          quantity: "2",
        },
        {
          name: "🥕 Carrots",
          quantity: "5",
        },
        {
          name: "🐖 Ham",
          quantity: "200g",
        }
      ]
    };
  }

  handleDelete(item, id){
    let new_items = this.state.items;
    new_items.splice(id, 1);
    this.setState({items: new_items})
  }

  render_item(item, id) {
    return(
      <Card className="inventory_item">
        <ListItem button>
          <ListItemText 
            primary={item.name}
            secondary={"x"+item.quantity}
          />
          <ListItemSecondaryAction>
              <IconButton onClick={()=> this.handleDelete(item, id)}>
                <ClearIcon/>
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
export default withStyles(styles)(Shopping_List);