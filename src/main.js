import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InventoryList from "./inventory";

const styles = {
  //these can be useful stylers and will show up in google results.
  //but usually you'll just use css
  root: {}
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // All these components need to get built
    // Once you've built it you can uncomment the corresponding line in the render
    // and change that component here to true and inventory to false
    // I'll build the buttons to do that later
    this.state = {
      inventory: true,
      shopping: false,
      recipes: false,
      planner: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
        <Card className="base" elevation={0}>
          <div className = "content">
            {this.state.inventory ? <InventoryList/> : null }
            {/* {this.state.shopping ? <ShoppingList/> : null }  */}
            {/* {this.state.recipes ? <RecipeList/> : null }  */}
            {/* {this.state.planner ? <Planner/> : null }*/}
            {/* ALL THESE NEED TO GET BUILT, CHECK inventory.js on example */}
          </div>
          <Fab color="secondary" aria-label="add" className="fab-add">
           <AddIcon />
           {/* This is the add button, it doesn't do anything yet, I (Mary) will deal with that */}
          </Fab>
        </Card>
    );
  }
}

export default withStyles(styles)(MyComponent);