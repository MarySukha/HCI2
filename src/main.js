import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import InventoryList from "./inventory";
import selector from "./images/selector.png";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DateRangeIcon from '@material-ui/icons/DateRange';

const styles = {
  //these can be useful stylers and will show up in google results.
  //but usually you'll just use css
  root: {}
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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
      planner: false,

      //other stuf
      design_a: false,
      add_open: false,
      tab_value: 0,
    };
  }

  handleOpen() {this.setState({add_open: true});}
  handleClose() {this.setState({add_open: false});}

  design_B(){
    return(
      <div>
        <Dialog 
          className="add-button"
          open={this.state.add_open} 
          onClose={()=>this.handleClose()}
        >
          <img src={selector} className="selector-image"/>
          <Fab 
            onClick={() => this.handleClose()}
            color="secondary" 
            aria-label="add" 
            className="fab-add"
            id="clear-icon"
          >
            <ClearIcon />
          </Fab>
          <Fab 
            onClick={() => this.AddToShopping()}
            id="shopping"
            className="invisible-button"
          >
            <ClearIcon />
          </Fab>
        </Dialog>
      </div>
    )
  }

  design_A(){
    return(
      <Dialog 
        className="add-button"
        open={this.state.add_open} 
        onClose={()=>this.handleClose()}
      >
        <img src={selector}/>
      </Dialog>
    )
  }

  handleTab(event, id) {
    console.log(event, id);
    this.setState({tab_value: id});
  }


  render() {
    const { classes } = this.props;
    return (
        <Card className="base" elevation={0}>
          <div className = "content">
          <AppBar position="static" className="AppBar">
            <Tabs value={this.state.tab_value} onChange={(event, id) => this.handleTab(event,id)}>
              <Tab icon={<KitchenIcon/>}/>
              <Tab icon={<ShoppingCartIcon/>}/>
              <Tab icon={<RestaurantIcon/>}/>
              <Tab icon={<DateRangeIcon/>}/>

              {/* {this.state.inventory ? <InventoryList/> : null } */}
              {/* {this.state.shopping ? <ShoppingList/> : null }  */}
              {/* {this.state.recipes ? <RecipeList/> : null }  */}
              {/* {this.state.planner ? <Planner/> : null }*/}
              {/* ALL THESE NEED TO GET BUILT, CHECK inventory.js on example */}
              {this.state.design_a ? this.design_A() : this.design_B()}
            </Tabs>
          </AppBar>
          <TabPanel value={this.state.tab_value} index={0}>
            Inventory
            <InventoryList/>
          </TabPanel>
          <TabPanel value={this.state.tab_value} index={1}>
            Shopping List
          </TabPanel>
          <TabPanel value={this.state.tab_value} index={2}>
            Recipes
          </TabPanel>
          <TabPanel value={this.state.tab_value} index={3}>
            Planner
          </TabPanel>
          </div>
          <Fab 
            onClick={() => this.handleOpen()}
            color="secondary" 
            aria-label="add" 
            className="fab-add"
          >
           <AddIcon />
          </Fab>
        </Card>
    );
  }
}

export default withStyles(styles)(MyComponent);