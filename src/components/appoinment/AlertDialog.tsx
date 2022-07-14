import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
       
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAgree = () => {
        navigate('/appointment')    
    }

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
