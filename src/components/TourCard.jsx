import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img1 from "../images/img1.jpg"

const TourCard = (props) => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                <img src={img1} alt="img1" className="img" />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the Falls
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TourCard;