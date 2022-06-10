import * as React from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {FormControl, FormControlLabel, FormLabel} from "@mui/material";
import {RadioGroup, Radio} from "@mui/material";
import Button from "@mui/material/Button";


export default function RiskAppetite(){

    const handleSubmit = () => {
        window.location.href = "/signin";

    }

    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
        margin: "10px",
        padding: "10px"
    };
    return(

        <Container component="main" maxWidth="xs">

            <Card variant="outlined" style={card_1}>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >

                    <Typography fontSize={25} >
                       Risk Appetite
                    </Typography>
                    <br/>

                    <Box >
                        <FormControl onSubmit={handleSubmit}>
                            <FormLabel id="demo-radio-buttons-group-label">Determining an appropriate investment strategy involves balancing potential risk against expected returns. When making
                                investment decisions, do you give more weight to potential losses or potential gains?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="gain"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="gain" control={<Radio />} label="Potential gains only" />
                                <FormControlLabel value="loss" control={<Radio />} label="Potential losses only" />

                            </RadioGroup>
                            <br/>
                            <FormLabel id="demo-radio-buttons-group-label">How would you characterize your willingness to accept investment risk in order to achieve your investment objectives?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="low"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="low" control={<Radio />} label="Low" />
                                <FormControlLabel value="average" control={<Radio />} label="Average" />
                                <FormControlLabel value="high" control={<Radio />} label="High" />
                            </RadioGroup>
                            <br/>
                            <FormLabel id="demo-radio-buttons-group-label">How easily do you adapt to unexpected negative financial change?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="easily"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="easily" control={<Radio />} label="I adapt easily" />
                                <FormControlLabel value="neutral" control={<Radio />} label="Neither easily nor uneasily" />
                                <FormControlLabel value="noteasily" control={<Radio />} label="I do not adapt easily" />
                            </RadioGroup>

                            <Button
                                fullWidth
                                variant="contained"
                                type={"submit"}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </FormControl>


                        {/*</form>*/}
                    </Box>
                </Box>
            </Card>
        </Container>
    );

}