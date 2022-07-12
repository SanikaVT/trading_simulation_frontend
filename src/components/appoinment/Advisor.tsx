
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertDialog from './AlertDialog';

const Advisor = (props: any) => {
    const params = useParams()
    const userId = params.userID;
    const navigate = useNavigate();

    interface characterData {
        id: number;
        title: string,
        lastName: string,
        firstName: string,
        picture: string,
        email: string
    }
    const [data, setData] = useState<characterData>(Object)
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('https://tutorial4-api.herokuapp.com/api/users/' + userId).then((result) => {
            setData(result.data.data)
        }).catch((err) => {
            console.log("something went wrong");
        })
    }

    return (
        <><div  key={data.id} >
            <img  src={data.picture}></img>
            <div >
                <p>{data.title}</p>
                <p>{data.firstName} {data.lastName}</p>
                <p>{data.email}</p>
            </div>
        </div>
            <AlertDialog />

        </>
    )

}

export default Advisor;