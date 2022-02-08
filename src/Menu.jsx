import * as React from 'react'
import './menu.css'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material'




const Menu = props => {
    const [productOpen, setProductOpen] = React.useState(false);
    const [statueOpen, setStatueOpen] = React.useState(false);
    const [cityOpen, setCityOpen] = React.useState(false);

    const handleClick = (listName) => {
        switch(listName){
            case 'product':
                setProductOpen(!productOpen);
                break;
            case 'statue':
                setStatueOpen(!statueOpen);
                break;
            case 'city':
                setCityOpen(!cityOpen);
                break;
        }
    }
  return <div>
       <List
      className='list'  
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div>
        <ListSubheader className='list-sub' component="div" id="nested-list-subheader">
          Filters 
        </ListSubheader>
        <hr style={{color:'#CBCBCB', margin:'0 auto 2rem', width:'96%'}}/>
        </div>
      }
    >

      <ListItemButton className='list-btn' onClick={() => handleClick('product')}>
        <ListItemText primary="Products" />
        {productOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={productOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className='list-child' sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton className='list-btn' onClick={() => handleClick('statue')}>
        <ListItemText primary="Statue" />
        {statueOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={statueOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className='list-child' sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton className='list-btn' onClick={() => handleClick('city')}>
        <ListItemText primary="City" />
        {cityOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={cityOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className='list-child' sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  </div>;
};

export default Menu;

