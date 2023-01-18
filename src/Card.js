import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import MovingIcon from "@mui/icons-material/Moving";

export const CardComponent = ({ card }) => {
  return (
    <Card
      sx={{
        width: "175px",
        height: "165px",
        left: "249px",
        top: "201px",
        borderRadius: "12px"
      }}
    >
      <CardContent>
        <Avatar
          variant="square"
          sx={{
            backgroundColor: "#1E6CC4",
            height: 30,
            width: 30,
            mb: 1,
            borderRadius: "4px"
          }}
        >
          {card.icon}
        </Avatar>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "24px",
            color: "#707070",
            mb: 1
          }}
        >
          {card.label}
        </Typography>
        <Typography
          sx={{ fontWeight: "900", fontSize: "20px", lineHeight: "30px" }}
        >
          {card.revenue}
        </Typography>
        <Box
          sx={{
            pt: 1,
            display: "flex",
            alignItems: "center",
            mb: 1
          }}
        >
          <MovingIcon color="success" />
          <Typography
            color="green"
            sx={{
              mr: 1,
              fontWeight: "500",
              fontSize: "11px",
              lineHeight: "18px"
            }}
          >
            {card.percentage}%
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: "11px", lineHeight: "18px" }}
          >
            {card.message}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
