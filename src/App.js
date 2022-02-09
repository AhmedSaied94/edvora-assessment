import Menu from './Menu'
import Slider from './Slider'
import * as React from 'react'
import {
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'

const App = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={3}>
          <Grid item xs={2}>
            <Menu />
          </Grid>
          <Grid item xs={10}>
          <Typography variant="h4" component="div" gutterBottom>
            Edvora
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Products
          </Typography>
          <Slider />
          </Grid>
          
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
