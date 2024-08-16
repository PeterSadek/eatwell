import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

import chef2 from "../assets/chef2.jpg";

const Welcome = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBlock: "7rem" }}>
      <Stack
        spacing={5}
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ md: "center" }}
      >
        <Stack
          direction="column"
          textAlign="start"
          width={{ xs: "100%", md: "50%" }}
        >
          <Typography
            color={theme.palette.primary.dark}
            fontSize="1.3rem"
            letterSpacing="0.3rem"
            mb="0.5rem"
          >
            OUR STORY
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{ fontWeight: 500 }}
            mb="2rem"
          >
            Welcome
          </Typography>
          <Typography
            sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
            mb="1rem"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <Typography
            sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.primary.dark,
                borderColor: theme.palette.primary.dark,
                padding: "1rem",
                paddingInline: "3rem",
                "&:hover": {
                  borderColor: theme.palette.secondary.main,
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.light,
                },
                marginTop: "2rem",
              }}
            >
              Learn More About Us
            </Button>
          </Box>
        </Stack>
        <Box width={{ xs: "100%", md: "50%" }}>
          <img src={chef2} alt="chef" width="100%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Welcome;
