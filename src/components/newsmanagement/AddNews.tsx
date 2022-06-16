import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


export default function AddNews() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="belowmargin">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                            News Management
                        </Typography>
                        {/*<Button color="inherit">Login</Button>*/}
                    </Toolbar>
                </AppBar>
            </Box>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Add News
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="NewsTitle"
                            label="News Title"
                            name="newstitle"
                            autoFocus
                        />
                        <TextareaAutosize
                            aria-label="news description"
                            placeholder="News Description"
                            id="NewsDesc"
                            style={{ width: 400, height: 300}}
                        />

                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                            />
                        </Button>

                        <Button name="Submit" type="submit" onClick={() =>alert("News added to user news tab")}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            > Add News
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

