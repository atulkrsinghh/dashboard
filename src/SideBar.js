import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import LanguageIcon from "@mui/icons-material/Language";
import HelpIcon from "@mui/icons-material/Help";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

export const Sidebar = () => {
  const items = [
    {
      icon: <DashboardIcon fontSize="small" />,
      title: "Dashboard"
    },
    {
      icon: <StorefrontIcon fontSize="small" />,
      title: "My Shop"
    },
    {
      icon: <SearchIcon fontSize="small" />,
      title: "Research Tools"
    },
    {
      icon: <TurnedInNotIcon fontSize="small" />,
      title: "Wishlist"
    },
    {
      icon: <HdrAutoIcon fontSize="small" />,
      title: "Trademark Analyser"
    },
    {
      icon: <LanguageIcon fontSize="small" />,
      title: "Affiliate Program"
    },
    {
      icon: <UpgradeIcon fontSize="small" />,
      title: "Upgrade"
    },
    {
      icon: <HelpIcon fontSize="small" />,
      title: "Support"
    },
    {
      icon: <ContactMailIcon fontSize="small" />,
      title: "Send Feedback"
    }
  ];
  return (
    <Drawer
      sx={{
        width: "268px",
        overflowY: "hidden"
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ margin: "auto" }}>
        <img
          src="https://everbee.io/wp-content/uploads/2021/09/EverBee-Horizontal-Logo-2000-x-500-px-1024x256.png"
          alt="Logo"
          style={{
            width: "120px",
            padding: "10px 0px 10px 15px"
          }}
        />
      </Box>
      <Box
        sx={{
          width: "215px",
          margin: "auto",
          background: "#F7F8FC",
          boxShadow: "inset 0px 2px 30px rgba(0, 0, 0, 0.05)",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          padding: "10px 10px"
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlhAOALra9zPJPA2skx7Ynu_rRY8qwPRFUQ&usqp=CAU"
          alt=""
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <Typography
          sx={{
            ml: 1.5,
            mr: 6.5,
            fontWeight: "400",
            lineHeight: "20px",
            fontSize: "14px"
          }}
        >
          PVTLmotions
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
      <List>
        {items.map((element) => (
          <ListItem key={element.title} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                {element.icon}
              </ListItemIcon>
              <ListItemText
                secondary={element.title}
                secondaryTypographyProps={{
                  color: "#000000",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "400"
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem alignItems="flex-start">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemAvatar>
            <Avatar
              src="data:image/jpeg;base64,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"
              alt="Cody"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Cody"
            primaryTypographyProps={{
              fontSize: "14px",
              lineHeight: "24px",
              fontWeight: "500"
            }}
            secondary={
              <Typography
                component="span"
                sx={{
                  mr: 1,
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontWeight: "400"
                }}
              >
                cody.pvt07@gmail.com
              </Typography>
            }
          />
          <KeyboardArrowUpIcon />
        </Box>
      </ListItem>
    </Drawer>
  );
};
