import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
// import PieChartComponent from './PieChartComp';

function ForumComp() {

  return (
      <>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" className="header-message">Forum</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} style={chatSection}>
            <Grid item xs={3} style={borderRight500}>
                {/* <PieChartComponent/> */}
            </Grid>
            <Grid item xs={9}>
                <List >
                    <ListItem key="1">
                        <Grid container>
                        <Grid item xs={12}>
                                <ListItemText>Comments</ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText  primary="I bought this stock a year ago! "></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText  secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText primary="Hey! I am not sure if I should invest here. Can someone help me?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText primary="Don't worry! I will help you"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={10}>
                        <TextField id="outlined-basic-email" label="Write a comment" fullWidth/>
                    </Grid>
                    <Grid xs={1}>
                        <Fab color="primary" aria-label="add"><SendRoundedIcon/></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </>
  );
}
const table= {
      minWidth: 650,
    };
const chatSection= {
      width: '100%',
      height: '80vh'
    };
const headBG= {
        backgroundColor: '#e0e0e0'
    };
const borderRight500= {
        borderRight: '1px solid #e0e0e0'
    };
const messageArea= {
      height: '70vh',
      overflowY: 'auto'
    };


export default ForumComp;