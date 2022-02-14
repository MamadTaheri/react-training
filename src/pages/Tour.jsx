import { Box, Container, Typography, Paper,BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import ImageCollage from '../components/ImageCollage';
import MyAccordian from '../components/MyAccordian';
import image from "../images/img6.jpg"
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import MyMModal from '../components/MyMModal';

const Tour = () => {
  
  const [value, setValue] = React.useState(0);

  return (
      <Container sx={{ width: 900 }}>
          <Typography variant='h3' component='h1' marginTop={3} >
              Explore the world in vegas
          </Typography>
          <Box marginTop={3} sx={{ display: "flex" }}>
              <img src={image} alt="" height={325}/>
              <ImageCollage />
          </Box>
          <Box>
            <Typography variant='h6' component='h4' marginTop={3} >
              About this ticket
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellendus molestiae necessitatibus unde minus illum ipsam in ipsum neque blanditiis amet sit, eum temporibus incidunt vel aliquam maiores laborum beatae dignissimos debitis cumque totam assumenda nam sequi? Totam, odit pariatur?
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h4' marginTop={3} marginBottom={2} >
              Frequently Asked Questions
            </Typography>
            <MyAccordian />
          </Box>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation >
              <MyMModal />
            </BottomNavigation>
          </Paper>
      </Container>
  );
};

export default Tour;