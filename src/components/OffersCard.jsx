import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function OffersCard({ image, desc, price, name }) {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={`${name} Dish`}
        />
        <CardContent sx={{ textAlign: "center", mt: "2rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={theme.palette.secondary.main}
          >
            {price}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Typography variant="body2" color={theme.palette.primary.dark}>
            {desc}
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: "0.7rem",
              paddingInline: "1rem",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.light,
              "&:hover": { backgroundColor: theme.palette.secondary.dark },
              textTransform: "none",
              mt: "1.5rem",
            }}
          >
            Order Now!
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
