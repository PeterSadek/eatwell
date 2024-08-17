import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import OffersCard from "./OffersCard";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import { Navigation, Pagination } from "swiper/modules";
import Animation from "./Animation";

const desc =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";

const images = {
  image1: dish1,
  image2: dish2,
  image3: dish3,
};

const tabsData = [
  [
    { price: "$19.5", name: "Beef with Sausage", image: images.image1 },
    { price: "$29.50", name: "Egg with Garlic", image: images.image2 },
    { price: "$11.50", name: "Beef Ribs", image: images.image3 },
  ],
  [
    { price: "$33.50", name: "Beef with Sauce", image: images.image1 },
    { price: "$12.50", name: "Fresh Salmon Fish", image: images.image2 },
    { price: "$53.50", name: "Beef Ribs", image: images.image3 },
  ],
  [
    { price: "$22.50", name: "Beef with Sauce", image: images.image1 },
    { price: "$39.50", name: "Fresh Salmon Fish", image: images.image2 },
    { price: "$40.99", name: "Beef Ribs", image: images.image3 },
  ],
];

export default function Offers() {
  const theme = useTheme();

  return (
    <Box sx={{ marginBlock: "7rem" }}>
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography
          color={theme.palette.primary.dark}
          fontSize="1.3rem"
          letterSpacing="0.3rem"
          mb="0.5rem"
        >
          OUR OFFERS
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontWeight: 400, fontSize: { md: "3.5rem", xs: "2.5rem" } }}
          mb="0.5rem"
        >
          Our Offer This Summer
        </Typography>
        <Typography
          sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
          mb="1rem"
        >
          {desc}
        </Typography>
      </Stack>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        loop={false}
      >
        {tabsData.map((cards, index) => (
          <SwiperSlide key={index}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              spacing={1}
              sx={{ justifyContent: "space-between", mb: "3rem", mt: "2.5rem" }}
            >
              {cards.map((card, idx) => (
                <Animation key={idx}>
                  <OffersCard
                    image={card.image}
                    desc={desc}
                    price={card.price}
                    name={card.name}
                  />
                </Animation>
              ))}
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
