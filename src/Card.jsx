import * as React from 'react'
import './card.css'
import { Typography } from '@mui/material';

const Card = () => {
  return <div className='card'>
    <div className='card-header'>
      <div>
        <div className='image-con'>
          <img src="" alt="" />
        </div>
        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          Location
        </Typography>
      </div>
      <div className='card-info'>
        <Typography sx={{color:'#fff'}} variant="subtitle2" gutterBottom component="div">
          Product Name
        </Typography>
        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          Brand Name
        </Typography>
        <Typography sx={{color:'#fff'}} variant="subtitle2" gutterBottom component="div">
          $28.50
        </Typography>
        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          Date 8/2/2022
        </Typography>
      </div>
    </div>
    <div className='card-body'>

        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          Description is very good
        </Typography>
      </div>
  </div>;
};

export default Card;
