//author: qiwei sun
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertDialog from "./AlertDialog";

// Advisor class
const Advisor = (props: any) => {
  const params = useParams();
  const userId = params.id;

  // advisor information
  interface characterData {
    id: number;
    title: string;
    lastName: string;
    firstName: string;
    picture: string;
    email: string;
  }

  //get advisor data when first time load the page
  const [data, setData] = useState<characterData>(Object);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("/api/advisor/" + userId)
      .then((result) => {
        setData(result.data.advisor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //render the componnent
  return (
    <>
      <div key={data.email}>
        <img src={data.picture}></img>
        <div>
          <p>{data.title}</p>
          <p>
            {data.firstName} {data.lastName}
          </p>
          <p>{data.email}</p>
        </div>
      </div>
      <AlertDialog />
    </>
  );
};

export default Advisor;
