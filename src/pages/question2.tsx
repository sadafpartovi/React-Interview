import {
  Container,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";
import axios from "axios";

export default function Question2() {
  const handleClick = async () => {
    try {
      const { data } = await axios.post("/api/question2", {
        name: "Sophie",
        id: "1",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container sx={{ pt: 2 }}>
      <Grid>
        <Link href="/question1" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 1</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/question3" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 3</ListItemText>
          </ListItemButton>
        </Link>
      </Grid>
      <Typography variant="h5">Question 2</Typography>
      <Typography>
        Create an api function in NextJS that takes an object with this type{" "}
        {"{id: string, name: test}"}[] and converts it to {"{id: name}"}
      </Typography>
      <Typography>
        Perform error handling so that any object without that shape will throw
        an error.
      </Typography>
      <Typography>Call the function from a button press</Typography>
      <Typography>You can use any library for this</Typography>
      <Button onClick={handleClick}>Click</Button>
    </Container>
  );
}
