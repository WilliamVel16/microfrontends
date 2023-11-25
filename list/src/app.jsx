import { useFetch } from "./useFetch";
import "./app.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardUser = (user) => {
  return (
    <React.Fragment key={user.id}>
      <CardContent className="individual">
        <Typography sx={{ fontSize: 14, fontStyle:'italic'}} gutterBottom>
        {user.username}
        </Typography>
        <Typography sx={{fontWeight: 'bold'}}variant="h5" component="div">
        {user.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {user.phone}
      </Typography>
      <Button sx={{ color:'white'}} size="small" href={user.website.startsWith("http") ? user.website : "http://" + user.website} >Learn More</Button>
      </CardContent>

    </React.Fragment>
  );
};


function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log({ data });
  return (
    <div className="App">
      <h1>API Usuarios</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className="card">
        <ul className="ul-card">
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data && data?.map((user) => cardUser(user))}
        </ul>

      </div>
    </div>
  );
}


export default App;
