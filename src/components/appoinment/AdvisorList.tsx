//author:qiwei sun
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

// show list of advisor
const AdvisorList = () => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState<string>("");

  //advisor schema
  interface characterData {
    id: number;
    title: string;
    lastName: string;
    firstName: string;
    age: number;
    picture: string;
    email: string;
  }

  //get advisor data from mongodatabase
  const [data, setData] = useState<characterData[]>([]);
  const [dataCopy, setDataCopy] = useState<characterData[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("/api/advisor")
      .then((result) => {
        if (result.data.advisor) {
          setData(result.data.advisor);
          setDataCopy(result.data.advisor);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // fillter advisor by his/her fisrt name or last name
  useEffect(() => {
    if (data && data.length > 0) {
      for (const user of data) {
        if (
          user.firstName.toLowerCase() === searchWord.toLowerCase() ||
          user.lastName.toLowerCase() === searchWord.toLowerCase()
        ) {
          const rows = [
            {
              id: user.id,
              title: user.title,
              age: user.age,
              lastName: user.lastName,
              firstName: user.firstName,
              email: user.email,
              picture: user.picture,
            },
          ];
          setData(rows);
          break;
        } else {
          setData(dataCopy);
        }
      }
    }
  }, [searchWord]);

  // read user input and store
  const onChange = (event: any) => {
    event.persist();
    const value = event.target.value;
    setSearchWord(value);
  };

  //define the column of the data grid
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 150 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: false,
    },
    { field: "age", headerName: "Age", width: 150, editable: false },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "user",
      headerName: "Advisor",
      width: 150,
      renderCell: (user) => {
        return (
          <>
            <Avatar alt="Remy Sharp" src={user.row.picture} />
          </>
        );
      },
    },
    // navigate to make an appointment page
    {
      field: "button",
      headerName: "Make an appointment",
      width: 200,
      renderCell: (user) => {
        return (
          <>
            <Button
              variant="contained"
              onClick={() => navigate("/advisor/" + user.id)}
            >
              Book an appointment
            </Button>
          </>
        );
      },
    },
  ];

  //render the page
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 1 / 4,
          }}
        >
          <InputBase
            type="text"
            placeholder="Enter first name or last name "
            value={searchWord}
            onChange={onChange}
            sx={{ ml: 1, flex: 1 }}
          />
          <IconButton
            type="submit"
            sx={{ mr: 1, p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <>
          <Button
            variant="contained"
            onClick={() => navigate("/register")}
            sx={{
              p: "2px 4px",
              ml: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 1 / 8,
              height: 40,
            }}
          >
            {" "}
            <span>Become a advisor</span>
          </Button>
        </>
      </Box>

      <Box
        component="span"
        sx={{ p: "2px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div style={{ height: 400, width: "80%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Box>
    </>
  );
};
export default AdvisorList;
