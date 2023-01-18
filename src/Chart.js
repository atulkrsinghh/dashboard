import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Card } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MovingIcon from "@mui/icons-material/Moving";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const data = [
  {
    name: "Page A",
    yaxis: "0-10K",
    date: 9
  },
  {
    name: "Page B",
    yaxis: "10-100K",
    date: 11
  },
  {
    name: "Page C",
    yaxis: "100K-1M",
    date: 13
  },
  {
    name: "Page D",
    yaxis: "1M-10M",
    date: 15
  },
  {
    name: "Page D",
    yaxis: "100K-1M",
    date: 17
  },
  {
    name: "Page D",
    yaxis: "1M-10M",
    date: 19
  },
  {
    name: "Page D",
    yaxis: "100K-1M",
    date: 21
  },
  {
    name: "Page D",
    yaxis: "10-100K",
    date: 23
  },
  {
    name: "Page D",
    yaxis: "100K-1M",
    date: 25
  },
  {
    name: "Page D",
    yaxis: "10-100K",
    date: 27
  },
  {
    name: "Page D",
    yaxis: "1M-10M",
    date: 29
  },
  {
    name: "Page D",
    yaxis: "100K-1M",
    date: 31
  }
];

export default function Chart() {
  const [field, setField] = React.useState("");

  const handleChange = (event) => {
    setField(event.target.value);
  };
  return (
    <Card
      sx={{
        margin: "40px auto",
        padding: "20px",
        width: "710px",
        height: "340px",
        borderRadius: "15px"
      }}
    >
      <Select
        value={field}
        onChange={handleChange}
        sx={{
          width: "115px",
          height: "31px",
          fontWeight: "400",
          fontSize: "14px",
          mb: 0.8,
          mt: 0.8
        }}
      >
        <MenuItem value="Revenue">Revenue</MenuItem>
      </Select>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          alignItems: "center",
          mb: 0.8,
          mt: 0.8
        }}
      >
        <MovingIcon color="success" />
        <Typography
          color="green"
          sx={{
            mr: 1,
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "18px"
          }}
          variant="subtitle2"
        >
          48%
        </Typography>
        <Typography
          sx={{ fontWeight: "500", fontSize: "12px", lineHeight: "18px" }}
        >
          from last week
        </Typography>
      </Box>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#44A9F3" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#44A9F3" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="yaxis"
          axisLine={false}
          tickLine={false}
        />
        <CartesianGrid
          strokeDasharray="3 5"
          horizontal={true}
          vertical={false}
        />
        <Tooltip
          contentStyle={{
            background: "#002753",
            borderRadius: "8px",
            color: "#FFFFFF"
          }}
        />
        <Area
          type="monotone"
          dataKey="yaxis"
          stroke="#44A9F3"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </Card>
  );
}
