import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import banner from "./banner.jpeg";

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        height: "300px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Box sx={{ padding: "45px 55px 30px" }}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "500",
            fontSize: "30px",
            lineHeight: "45px"
          }}
        >
          Good Morning, Cody
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "29px"
          }}
        >
          Take a look at the latest update for your shop PVTLmotions
        </Typography>
      </Box>
    </Box>
  );
};
