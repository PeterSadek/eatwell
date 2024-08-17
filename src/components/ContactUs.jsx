import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import chef2 from "../assets/chef2.jpg";

const ContactUs = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBlock: "7rem" }}>
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontWeight: 400, fontSize: { md: "3.5rem", xs: "2.5rem" } }}
          mb="0.5rem"
        >
          Get In Touch
        </Typography>
        <Typography
          sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Typography>
      </Stack>

      <Stack
        spacing={5}
        direction={{ xs: "column", md: "row" }}
        sx={{ marginTop: "3rem" }}
        justifyContent={{ md: "space-between" }}
      >
        <Stack direction="column" spacing={2} width={{ xs: "100%", md: "60%" }}>
          <TextField
            fullWidth
            label="Name"
            id="fullWidth"
            sx={{
              backgroundColor: "lightcyan",
              "& .MuiInputLabel-root": {
                color: theme.palette.primary.dark,
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            sx={{
              backgroundColor: "lightcyan",
              "& .MuiInputLabel-root": {
                color: theme.palette.primary.dark,
              },
            }}
          />
          <TextField
            label="Write your message"
            multiline
            rows={5}
            maxRows={4}
            sx={{
              backgroundColor: "lightcyan",
              "& .MuiInputLabel-root": {
                color: theme.palette.primary.dark,
              },
            }}
          />
          <Box>
            {" "}
            <Button
              variant="contained"
              sx={{
                padding: "1rem",
                paddingInline: "2rem",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.light,
                "&:hover": { backgroundColor: theme.palette.secondary.dark },
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Stack>

        <Card sx={{ width: { md: "30%", xs: "100%" } }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: { md: "200" } }}
              image={chef2}
              alt="chef"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "2rem" }}
              >
                <Typography>Address:</Typography> 121 Street, Melbourne Victoria
                3000 Australia
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "2rem" }}
              >
                <Typography>Phone:</Typography> 90 987 65 44
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "2rem" }}
              >
                <Typography>Email:</Typography>{" "}
                <Typography
                  component="span"
                  sx={{ color: theme.palette.secondary.main }}
                >
                  info@yoursite.com
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Box>
  );
};

export default ContactUs;
