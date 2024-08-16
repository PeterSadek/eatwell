import { Paper, Stack, Typography, Button, useTheme } from "@mui/material";
import headerImage from "../assets/headerImage.jpg";
import NavBar from "./NavBar";

const Header = () => {
  const theme = useTheme();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
    },
  };
  return (
    <Paper
      style={styles.paperContainer}
      sx={{ height: "100vh", color: theme.palette.primary.light }}
    >
      <NavBar />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center", height: "100%" }}
      >
        <Typography component="h1" variant="h1" sx={{ fontWeight: "bold" }}>
          Welcome To EatWell
        </Typography>
        <Typography sx={{ color: theme.palette.primary.main }}>
          Come and eat well with our delicious & healthy foods.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
            padding: "1rem",
            paddingInline: "2rem",
            "&:hover": {
              borderColor: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.light,
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
