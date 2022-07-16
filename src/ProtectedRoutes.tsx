// @author Dharmay Dineshchandra Sureja 
// Banner id (B00904061)
// email : dh276903@dal.ca
// Protected routes responsible to protect unauthorised routing from happening
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    let user;
    const loggedcheck = localStorage.getItem("userID");
    if(loggedcheck){
         user = { loggedIn: true };
        console.log("loggedcheck is detected");
    }
    else{
        user = { loggedIn: false };
        console.log("login data nmot found dear");
    }
    console.log("looged user is hereeee",loggedcheck);
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;