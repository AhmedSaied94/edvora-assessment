import * as React from 'react';
import { Typography } from '@mui/material';
import Card from './Card'
import './slider.css'

const Slider = props => {

  const [items, setItems] = React.useState([]);
  let pNames = new Set()
  let pnames = []

  React.useMemo(() => {
    fetch('https://assessment-edvora.herokuapp.com')
    .then(res => res.json())
    .then(data =>setItems(data))

  },[])

  for(let item of items){
    pNames.add(item.product_name)
  }
  pnames = [...pNames]

  const check = () => console.log(items, pNames, pnames)

 

  return <div className='slider'>
    <button onClick={check}> check</button>
    {pnames.map((pName)=>{
      console.log(pName)
      return <div key={pName}>
        <Typography variant='h5' gutterBottom component="div">
          {pName}
        </Typography>
        <hr/>
        <div className='pag'>
          {items.filter((item) => item.product_name === pName)
          .map((item, index) => {
            if(index<4) return <Card item={item} key={index} />
          })
            
              
            
          }
        </div>
      </div>
    })}
  </div>;
};

export default Slider;
