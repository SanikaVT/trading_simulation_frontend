//author:qiwei sun
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";

// AlertDialog comments for notifying user that will redirect to the book appointment page
export default function AlertDialog() {

    //initial the the variables
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    //open the dialogue
    const handleClickOpen = () => {
        setOpen(true);

    };
    //close the dialogue
    const handleClose = () => {
        setOpen(false);
    };
    
    // user click agree redirect tot he appointment page
    const handleAgree = () => {
        navigate('/appointment')
    }

    //render the AlertDialog components
    return (
        <Box sx={{ width: 1 / 8, alignItems: 'center' }}>
            <Button variant="outlined" onClick={handleClickOpen}>
                make a appointment
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Redirect to the make a appointment page?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You will redirect to the make a appointment page
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancle</Button>
                    <Button onClick={handleAgree} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
