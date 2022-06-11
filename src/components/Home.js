import PortfolioTable from './PortfolioTable'
import Navbar from './Navbar'
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const routeChange = () =>{
        let path = `/Report`;
        navigate(path);
    }

    const routeChangeHome = () =>{
        let path = `/`;
        navigate(path);
    }
    return (

        <div>
            <Navbar/>
            <Button variant="outlined" onClick={routeChangeHome}>Holdings</Button>
            <Button variant="outlined">Positions</Button>
            <Button variant="outlined" onClick={routeChange}>Report</Button>
            <PortfolioTable/>


        </div>
    );
}

export default Home;
