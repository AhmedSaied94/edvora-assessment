import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react'
import './list.css'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



const List = props => {
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
      sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
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

export default List;

