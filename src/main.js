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
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Draggable from 'react-draggable';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DateRangeIcon from '@material-ui/icons/DateRange';

const styles = {
  //these can be useful stylers and will show up in google results.
  //but usually you'll just use css
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
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
      design_a: true,
      add_open: false,
      tab_value: 0,

      add_inventory: false,
    };
  }

  handleOpen() {this.setState({add_open: true});}
  handleClose() {this.setState({add_open: false});}
  handleInventoryClose() {this.setState({add_inventory: false});}

  handleTab(event, id) {
    if(Number.isInteger(id)){
      this.setState({tab_value: id});
    }
  }
  addToShopping() {console.log("Shopping Button")}
  addToInventory() {
    this.setState({add_open: false});
    this.setState({add_inventory: true});
  }
  addToPlanner() {console.log("Planner Button")}
  addToScanner() {console.log("Scanner Button")}



  design_B(){
    return(
      <div>
        <Dialog 
          className="add-button-B"
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
          <Fab onClick={() => this.addToShopping()} id="add-shopping" className="invisible-button"></Fab>
          <Fab onClick={() => this.addToInventory()} id="add-inventory" className="invisible-button"></Fab>
          <Fab onClick={() => this.addToPlanner()} id="add-planner" className="invisible-button"></Fab>
          <Fab onClick={() => this.addToScanner()} id="add-scanner" className="invisible-button"></Fab>

        </Dialog>
      </div>
    )
  }

  inventoryAdd(){
    const { classes } = this.props;
    if(this.state.design_a){
      return(
        <Dialog 
          className="inventory-add-A"
          open={this.state.add_inventory} 
          onClose={()=>this.handleInventoryClose()}
        >
          <DialogTitle id="form-dialog-title">Add to Inventory</DialogTitle>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button><ListItemText primary="🥑 Produce"/></ListItem>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button><ListItemText primary="🥩 Meat"/></ListItem>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button><ListItemText primary="🐄 Dairy"/></ListItem>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button><ListItemText primary="🍅 Fruit"/></ListItem>
                  </Card>
                </Grid>
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={()=>this.handleInventoryClose()} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )
    }else{
      return(
        <Dialog 
          className="inventory-add-B"
          open={this.state.add_inventory} 
          onClose={()=>this.handleInventoryClose()}
        >
          <DialogTitle id="form-dialog-title">Add to Inventory</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="Item Name"
              type="label"
            />
            <p></p>
            <TextField
              label="Days until Expiry"
              type="number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.handleInventoryClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>this.handleInventoryClose()} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      )
    }
  }

  design_A(){
    return(
      <Dialog 
        className="add-button-A"
        open={this.state.add_open} 
        onClose={()=>this.handleClose()}
      >
        <DialogTitle id="simple-dialog-title">Select Where to Add To</DialogTitle>
        <Grid>
          <Card className="design-A-selector">
            <ListItem button onClick={() => this.addToInventory()}>
              <ListItemIcon>
                <KitchenIcon/>
              </ListItemIcon>
              <ListItemText primary="Inventory"/>
            </ListItem>
          </Card>
          <Card className="design-A-selector">
            <ListItem button onClick={() => this.addToShopping()}>
            <ListItemIcon>
                <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="Shopping List"/>
            </ListItem>
          </Card>
          <Card className="design-A-selector">
            <ListItem button onClick={() => this.addToPlanner()}>
              <ListItemIcon>
                <RestaurantIcon/>
              </ListItemIcon>
              <ListItemText primary="Meal Planner"/>
            </ListItem>
          </Card>
          <p></p>
        </Grid>
      </Dialog>
    )
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
                {this.state.add_inventory ? this.inventoryAdd() : null}
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