import { NavBar } from "./NavBar";
import { Paper, Stack, Typography, Button } from "@mui/material";
import headerImage from "../assets/headerImage.jpg";

const Header = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
    },
  };
  return (
    <Paper
      style={styles.paperContainer}
      sx={{ height: "100vh", color: "white" }}
    >
      <NavBar />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Typography component="h1" variant="h1" sx={{ fontWeight: "bold" }}>
          Welcome To EatWell
        </Typography>
        <Typography sx={{ color: "lightgrey" }}>
          Come and eat well with our delicious & healthy foods.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            padding: "1rem",
            paddingInline: "2rem",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "white",
              color: "black",
            },
            marginTop: "2rem",
          }}
        >
          Reservation
        </Button>
      </Stack>
    </Paper>
  );
};

export default Header;
