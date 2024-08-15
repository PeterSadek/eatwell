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
} from "@mui/material";

import chef2 from "../assets/chef2.jpg";

const ContactUs = () => {
  return (
    <Box sx={{ marginBlock: "4rem" }}>
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography component="h2" variant="h2" sx={{ fontWeight: 500 }}>
          Get In Touch
        </Typography>
        <Typography sx={{ color: "grey", fontSize: "1.3rem" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Typography>
      </Stack>

      <Stack
        spacing={5}
        direction={{ xs: "column", md: "row" }}
        sx={{ marginTop: "3rem" }}
        justifyContent={{ md: "center" }}
      >
        <Stack direction="column" spacing={2} width={{ xs: "100%", md: "50%" }}>
          <TextField
            fullWidth
            label="Name"
            id="fullWidth"
            sx={{ backgroundColor: "lightcyan" }}
          />
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            sx={{ backgroundColor: "lightcyan" }}
          />
          <TextField
            placeholder="Write your message"
            multiline
            rows={5}
            maxRows={4}
            sx={{ backgroundColor: "lightcyan" }}
          />
          <Box>
            {" "}
            <Button
              variant="contained"
              sx={{ paddingInline: "1rem", backgroundColor: "orange" }}
            >
              Send Message
            </Button>
          </Box>
        </Stack>

        <Card>
          <CardActionArea>
            <CardMedia component="img" height="200" image={chef2} alt="chef" />
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
                <Typography component="span" sx={{ color: "orange" }}>
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
