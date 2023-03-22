import React from 'react'
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import ImageCollage from '../components/ImageCollage';
import Accordion from '../components/Accordian';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

const Tour = () => {
  return (
    <Container sx={{width:900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the world in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/180313182911-01-las-vegas-travel-strip.jpg?q=w_3418,h_2556,x_0,y_0,c_fill" alt="" height={350}  width={600}/>
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant="h6" component="h2" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragaph" component="p" marginTop={3} sx={{textAlign:"justify"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" component="h2" marginTop={3} marginBottom={3}>
                Frequently Asked Questions
            </Typography>
            <Accordion />  
        </Box>
        <Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
            </Paper>
        </Box>
    </Container>
  )
}

export default Tour