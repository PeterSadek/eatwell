import Header from "./components/Header";
import "./App.css";
import ContactUs from "./components/ContactUs";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: "5rem" }}>
        <ContactUs />
      </Box>
    </>
  );
}

export default App;
