import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { mockData } from "./data.js";
import Input from "@mui/material/Input";
import TablePagination from "@mui/material/TablePagination";

export const DataTable = () => {
  const [filter, setFilter] = useState({ search: "", sort: 1 });
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(7);
  const filteredOrders = useMemo(() => {
    const { search, sort } = filter;
    const match = new RegExp(search, "gi");
    let result = mockData.filter((option) => option.productName.match(match));
    if (sort === 1) {
      return result.sort((a, b) =>
        a.productName.toLowerCase() > b.productName.toLowerCase() ? 1 : -1
      );
    } else {
      return result.sort((a, b) =>
        a.productName.toLowerCase() < b.productName.toLowerCase() ? 1 : -1
      );
    }
  }, [filter]);

  const handleChangePage = (event, newpage) => {
    setPage(newpage);
  };

  return (
    <Card
      sx={{
        maxWidth: "750px",
        margin: "20px auto",
        borderRadius: "16px",
        boxShadow: "0px 6px 20px 0px rgba(0, 0, 0, 0.05)"
      }}
    >
      <Box sx={{ height: " 685px", overflowX: "auto", padding: "16px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "600",
            padding: "16px"
          }}
        >
          <span
            style={{ fontWeight: "700", fontSize: "16px", lineHeight: "24px" }}
          >
            Recent Sales
          </span>
          <Input
            placeholder="Search Product"
            inputProps={{ "aria-label": "description" }}
            onChange={(e) => {
              setFilter({ ...filter, search: e.target.value });
            }}
          />
        </Box>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                opacity: "0.5"
              }}
            >
              <TableCell>
                Product Name
                {filter.sort === -1 ? (
                  <ArrowUpwardIcon
                    onClick={() => setFilter({ ...filter, sort: 1 })}
                    sx={{ cursor: "pointer", fontSize: "12px", ml: 0.5 }}
                  />
                ) : (
                  <ArrowDownwardIcon
                    sx={{ cursor: "pointer", fontSize: "12px", ml: 0.5 }}
                    onClick={() => setFilter({ ...filter, sort: -1 })}
                  />
                )}
              </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>LTV</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders
              .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
              .map((element) => (
                <TableRow hover key={element.id}>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "600"
                      }}
                    >
                      <img
                        src={element.img}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "5px",
                          marginRight: "10px"
                        }}
                      />
                      {element.productName}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {element.customer}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {element.date}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {element.LTV}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {element.total}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
    </Card>
  );
};
