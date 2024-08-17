import { Paper, Stack, Typography, Button, useTheme } from "@mui/material";
import headerImage from "../assets/headerImage.jpg";
import headerImageMob2 from "../assets/headerImageMob2.jpg";
import NavBar from "./NavBar";

const Header = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: "100vh",
        color: theme.palette.primary.light,
        backgroundImage: {
          md: `url(${headerImage})`,
          xs: `url(${headerImageMob2})`,
        },
        backgroundSize: "cover",
      }}
    >
      <NavBar />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center", height: "100%" }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "5rem" },
            mb: "1rem",
          }}
        >
          Welcome To EatWell
        </Typography>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: { md: "1.1rem", xs: "0.9rem" },
          }}
        >
          Come and eat well with our delicious & healthy foods.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
            padding: { md: "1rem", xs: "0.7rem" },
            paddingInline: { md: "2rem", xs: "8rem" },
            "&:hover": {
              borderColor: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.light,
              color: "black",
            },
            marginTop: "3rem",
          }}
        >
          Reservation
        </Button>
      </Stack>
    </Paper>
  );
};

export default Header;
