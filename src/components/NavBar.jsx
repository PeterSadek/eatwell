import { Typography, Stack, List, ListItem, ListItemText } from "@mui/material";

export const NavBar = () => {
  const navItems = [
    "HOME",
    "ABOUT",
    "OFFER",
    "MENU",
    "NEWS",
    "GALLERY",
    "CONTACT",
  ];

  return (
    <Stack direction="row" justifyContent="space-between" marginInline="5rem">
      <Typography variant="h6" sx={{ my: 2 }}>
        EATWELL
      </Typography>
      <List component={Stack} direction="row" justifyContent="space-evenly">
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
