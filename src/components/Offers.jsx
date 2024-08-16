import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Stack, Typography, useTheme } from "@mui/material";
import OffersCard from "./OffersCard";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";

const OrangeDotTab = styled(Tab)(({ theme }) => ({
  minWidth: 0,
  minHeight: 0,
  padding: 0,
  margin: theme.spacing(1),
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.dark,
  "&.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const desc =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";

const images = {
  image1: dish1,
  image2: dish2,
  image3: dish3,
};

const card1 = {
  price: "$19.5",
  name: "Beef with Sausage",
};

const card2 = {
  price: "$29.50",
  name: "Egg with Garlic",
};

const card3 = {
  price: "$11.50",
  name: "Beef Ribs",
};

const card4 = {
  price: "$33.50",
  name: "Beef with Sauce",
};

const card5 = {
  price: "$12.50",
  name: "Fresh Salmon Fish",
};

const card6 = {
  price: "$53.50",
  name: "Beef Ribs",
};

const card7 = {
  price: "$22.50",
  name: "Beef with Sauce",
};

const card8 = {
  price: "$39.50",
  name: "Fresh Salmon Fish",
};

const card9 = {
  price: "$39.50",
  name: "Beef Ribs",
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Offers() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          sx={{ fontWeight: 500 }}
          mb="0.5rem"
        >
          Our Offer This Summer
        </Typography>
        <Typography
          sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
          mb="1rem"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Typography>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <Box>
          <CustomTabPanel value={value} index={0}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <OffersCard
                image={images.image1}
                desc={desc}
                price={card1.price}
                name={card1.name}
              />
              <OffersCard
                image={images.image2}
                desc={desc}
                price={card2.price}
                name={card2.name}
              />
              <OffersCard
                image={images.image3}
                desc={desc}
                price={card3.price}
                name={card3.name}
              />
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <OffersCard
                image={images.image1}
                desc={desc}
                price={card4.price}
                name={card4.name}
              />
              <OffersCard
                image={images.image2}
                desc={desc}
                price={card5.price}
                name={card5.name}
              />
              <OffersCard
                image={images.image3}
                desc={desc}
                price={card6.price}
                name={card6.name}
              />
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <OffersCard
                image={images.image1}
                desc={desc}
                price={card7.price}
                name={card7.name}
              />
              <OffersCard
                image={images.image2}
                desc={desc}
                price={card8.price}
                name={card8.name}
              />
              <OffersCard
                image={images.image3}
                desc={desc}
                price={card9.price}
                name={card9.name}
              />
            </Stack>
          </CustomTabPanel>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <OrangeDotTab {...a11yProps(0)} />
            <OrangeDotTab {...a11yProps(1)} />
            <OrangeDotTab {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Stack>
    </Box>
  );
}
