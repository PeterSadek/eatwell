import Header from "./components/Header";
import "./App.css";
import ContactUs from "./components/ContactUs";
import { Box } from "@mui/material";
import Welcome from "./components/Welcome";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: "4rem" }}>
        <Welcome />
        <Offers />
        <ContactUs />
      </Box>
    </>
  );
}

export default App;
