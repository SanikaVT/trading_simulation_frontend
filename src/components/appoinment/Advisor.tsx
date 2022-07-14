
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertDialog from './AlertDialog';

const Advisor = (props: any) => {
    const params = useParams()
    const userId = params.id;
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

        axios.get('http://localhost:3100/api/advisor/' + userId).then((result) => {
            setData(result.data.advisor)
        }).catch((err) => {
            console.log('error')
            console.log(err);
        })
    }

    return (
        <><div key={data.email} >
            <img src={data.picture}></img>
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