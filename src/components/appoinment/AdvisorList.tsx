import axios from "axios";
import { userInfo } from "os";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const AdvisorList = () => {
    const navigate = useNavigate();
    const [searchWord, setSearchWord] = useState<string>('');
    interface characterData {
        id: number;
        title: string,
        lastName: string,
        firstName: string,
        picture: string,
        email: string
    }
    const [data, setData] = useState<characterData[]>([])
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('https://tutorial4-api.herokuapp.com/api/users/').then((result) => {
            setData(result.data.data)
        }).catch((err) => {
            console.log("something went wrong");
        })
    }
    console.log(data)
    const handlleOnClick = () => {

    }
    const onChange = (event: any) => {
        event.persist();
        setSearchWord(event.target.value);
    }


    return (
        <>
            <div >
                <input className="prompt" type="text" placeholder="enter first name or last name"
                    value={searchWord} onChange={onChange}></input>
                <div>
                    {data?.length ? data.map((user, index) => {

                        if (user.firstName === searchWord || user.lastName === searchWord) {
                            return (
                                <div className="results" key={user.id} onClick={() => navigate(
                                    '/advisor/' + user.id

                                )}>
                                    <img className="ui avatar image" src={user.picture}></img>
                                    <div className="content">
                                        <a >{user.title}</a>
                                        <a >{user.firstName} {user.lastName}</a>
                                        <a >{user.email}</a>
                                    </div>
                                </div>
                            )
                        }

                    }) : null}
                </div>

            </div>
            <div className="ui list">

                {data?.length ? data.map((user) => {
                    return (<div className="item" key={user.id} onClick={() => {
                        navigate('/advisor/' + user.id)

                    }}>
                        <img className="ui avatar image" src={user.picture}></img>
                        <div className="content">
                            <a className="header">{user.title}</a>
                            <a className="header">{user.firstName} {user.lastName}</a>
                            <a className="header">{user.email}</a>

                        </div>
                    </div>)
                }) : null}

            </div>

        </>


    )
}
export default AdvisorList;