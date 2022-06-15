import Navbar from './Navbar.tsx';
import Button from "@mui/material/Button";
import Datepicker from "./Datepicker.tsx";
import {useNavigate} from "react-router-dom";


function Report() {
    const navigate = useNavigate();
    const routeChangeHome = () =>{
        let path = `/`;
        navigate(path);
    }
    return (
        <div>

            <Navbar/>
            <Button variant="outlined" onClick={routeChangeHome}>Holdings</Button>
            <Button variant="outlined">Positions</Button>
            <Button variant="outlined">Report</Button>
            <Datepicker/>

        </div>
    );
}

export default Report;