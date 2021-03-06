import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import selector from "./images/selector.png";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from "@material-ui/core/Grid";
import milk from "./images/milk.png";
import cheese from "./images/cheese.png";
import eggs from "./images/eggs.png";
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NotificationIcon from '@material-ui/icons/Notifications';
import NoNotificationIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';

import ShoppingList from "./shopping";
import RecipeList from "./recipes";
import Planner from "./planner";

const styles = {
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
    this.state = {
      design_a: false,
      add_open: false,
      tab_value: 0,
      add_inventory: false,
      add_inventory_item: false,
      item_type: "",
      item_days: 0,
      temp_item_name: "",
      temp_item_days: 0,
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
      ],
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
  handleInventoryAddClose(){this.setState({add_inventory_item: false});}

  handleAddItem(type, days){
    this.setState({
      add_inventory: false, 
      add_inventory_item: true, 
      item_type: type,
      item_emoji: this.getEmoji(type),
      item_days: days,
      temp_item_days: days,
      temp_item_name: this.getEmoji(type),
    });
  }

  getEmoji(type){
    let emoji;
    if(type == "Produce"){
      emoji = "????";
    }else if(type == "Meat"){
      emoji = "????";
    }else if(type == "Dairy"){
      emoji = "????";
    }else if(type == "Fruit"){
      emoji = "????";
    }else{
      emoji = "????";
    }
    return emoji;
  }

  renderAddItem(){
    return(
      <Dialog 
          className="inventory-add-B"
          open={this.state.add_inventory_item} 
          onClose={()=>this.handleInventoryAddClose()}
        >
          <DialogTitle id="form-dialog-title">Add {this.state.item_type} to Inventory</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="Item Name"
              type="label"
              defaultValue={this.state.item_emoji}
              onChange={(event)=>this.handleNameChange(event.target.value)}
            />
            <p></p>
            <TextField
              label="Days until Expiry"
              type="number"
              defaultValue={this.state.item_days}
              onChange={(event)=>this.handleDaysChange(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.handleInventoryAddClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>this.addItem()} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
    )
  }

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

  addItem(){
    let new_items = this.state.items;
    new_items.push({
      name: this.state.temp_item_name,
      expires: this.state.temp_item_days,
      checked: false,
    })
    this.setState({items: new_items, add_inventory: false, add_inventory_item: false});
  }

  handleNameChange(value){
    this.setState({temp_item_name: value});
  }

  handleDaysChange(value){
    this.setState({temp_item_days: value});
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
                    <ListItem button
                      onClick={()=>this.handleAddItem("Produce", 7)}
                    ><ListItemText primary="???? Produce"/></ListItem>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button
                     onClick={()=>this.handleAddItem("Meat", 5)}
                    ><ListItemText primary={"???? Meat"}/></ListItem>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button
                      onClick={()=>this.handleAddItem("Dairy", 10)}
                    ><ListItemText primary="???? Dairy"/></ListItem>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="inventory-item-add-A">
                    <ListItem button
                      onClick={()=>this.handleAddItem("Fruit", 4)}
                    ><ListItemText primary="???? Fruit"/></ListItem>
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
              onChange={(event)=>this.handleNameChange(event.target.value)}
            />
            <p></p>
            <TextField
              label="Days until Expiry"
              type="number"
              ref="item_days"
              onChange={(event)=>this.handleDaysChange(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.handleInventoryClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>this.addItem()} color="primary">
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

  render_inventory_item(item, id) {
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
                {item.checked ? <NotificationIcon/> : <NoNotificationIcon/>}
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
          <div className = "content">
            <AppBar position="static" className="AppBar">
              <Tabs value={this.state.tab_value} onChange={(event, id) => this.handleTab(event,id)}>
                <Tab icon={<KitchenIcon/>}/>
                <Tab icon={<ShoppingCartIcon/>}/>
                <Tab icon={<RestaurantIcon/>}/>
                <Tab icon={<DateRangeIcon/>}/>
                {this.state.add_inventory_item ? this.renderAddItem() : null}
                {this.state.add_inventory ? this.inventoryAdd() : null}
                {this.state.design_a ? this.design_A() : this.design_B()}
              </Tabs>
            </AppBar>
            <TabPanel value={this.state.tab_value} index={0}>
              <Grid className="inventory_grid">
                {this.state.items.map((item, id) => this.render_inventory_item(item, id))}
              </Grid>
            </TabPanel>
            <TabPanel value={this.state.tab_value} index={1}>
              <ShoppingList/>
            </TabPanel>
            <TabPanel value={this.state.tab_value} index={2}>
              <RecipeList/>
            </TabPanel>
            <TabPanel value={this.state.tab_value} index={3}>
              <Planner/>
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