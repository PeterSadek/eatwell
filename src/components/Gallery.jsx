import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const images = [food1, food2, food3, food4, food5, food6];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
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
          Gallery
        </Typography>
        <Typography
          sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Typography>
      </Stack>
      <Stack
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        ref={ref}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 3, delay: 0.5 }}
        component={motion.div}
        direction={{ xs: "column", md: "row" }}
        flexWrap="wrap"
        spacing={1}
        alignItems="center"
        sx={{ mb: "3rem", mt: "2.5rem" }}
      >
        {images.map((image) => (
          <Box
            key={image}
            sx={{
              width: 350,
              height: "auto",
              borderRadius: 1,
              flexGrow: 1,
            }}
          >
            <img
              src={image}
              alt={image}
              width="100%"
              height="auto"
              style={{ borderRadius: "inherit" }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Gallery;
