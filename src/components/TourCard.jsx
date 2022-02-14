import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import img1 from "../images/img1.jpg";

const TourCard = (props) => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                <img src={img1} alt="img1" className="img" />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the Falls
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }} >
                        <AccessTimeIcon sx={{width: 12.5}} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
                        <Rating name="read-only" value={4.5} precision={0.25} size="small" readOnly />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant="body3" component="p" marginLeft={1.5}>
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            From C $147
                        </Typography> 
                    </Box>
                </Box>

            </Paper>
        </Grid>
    );
};

export default TourCard;