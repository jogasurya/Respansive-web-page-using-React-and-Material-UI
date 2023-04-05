import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
} from "@mui/material";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  }, []);
  return (
    <div className="App">
      <Grid container spacing={3}>
        {users &&
          users.map((item) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid sm={9} lg={9}>
                        <div>
                          <label>FullName:</label>
                          {item.firstName + " " + item.lastName}
                        </div>
                        <div>
                          <label>Gender:</label>
                          {item.gender}
                        </div>
                        <div>
                          <label>Age:</label>
                          {item.age}
                        </div>
                        <div>
                          <label>Email:</label>
                          {item.email}
                        </div>
                        <div>
                          <label>Phone:</label>
                          {item.phone}
                        </div>
                      </Grid>
                      <Grid sm={3} lg={3}>
                        <CardMedia
                          sx={{ height: 50, width: 50 }}
                          image={item.image}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
