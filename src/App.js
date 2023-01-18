import { ThemeProvider } from "@mui/material/styles";
import "./styles.css";
import { Sidebar } from "./SideBar";
import { DataTable } from "./Table";
import { Banner } from "./Banner";
import { theme } from "./theme";
import { CardComponent } from "./Card";
import MoneyIcon from "@mui/icons-material/Money";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Box from "@mui/material/Box";
import Chart from "./Chart.js";

export default function App() {
  const cardData = [
    {
      label: "Gross Avenue",
      revenue: "$48670.19",
      percentage: 10.3,
      icon: <MoneyIcon />,
      message: "from last week"
    },
    {
      label: "AOV",
      revenue: "$335.65",
      percentage: 12.3,
      icon: <PaidIcon />,
      message: "from last week"
    },
    {
      label: "Total Orders",
      revenue: 145,
      percentage: 47,
      message: "from last week"
    },
    {
      label: "LTV",
      revenue: "$456",
      percentage: 27,
      icon: <PeopleIcon />,
      message: "from last week"
    },
    {
      label: "Shop Rank",
      revenue: 48670.19,
      percentage: 54,
      icon: <AssessmentIcon />,
      message: "behind you"
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Sidebar />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "-6px",
            width: "100%"
          }}
        >
          <Box className="banner">
            <Banner />
            <Box
              sx={{
                display: "flex",
                gap: "35px",
                marginLeft: "55px",
                top: "200px",
                marginTop: "-120px"
              }}
            >
              {cardData.map((data) => {
                return <CardComponent card={data} key={data.label} />;
              })}
            </Box>
          </Box>
          <Box>
            <Chart />
          </Box>
          <Box>
            <DataTable />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
