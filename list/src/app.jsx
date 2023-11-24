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
    <Card key={user.id} sx={{ minWidth: 275, maxWidth: 300 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.username}
        </Typography>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={
            user.website.startsWith("http")
              ? user.website
              : "http://" + user.website
          }
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log({ data });
  return (
    <div className="App">
      <h1>API users</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div>
        <ul className="containerUsers">
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data && data?.map((user) => cardUser(user))}
        </ul>
      </div>
    </div>
  );
}

export default App;
