import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px 16px"
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "32px 24px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#E6E8F0"
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          ".MuiTableCell-root": {
            color: "#374151"
          },
          "& .MuiTableCell-root": {
            borderBottom: "0.2px solid rgba(0, 0, 0, 0.15)"
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            borderRight: "none",
            boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)"
          }
        }
      }
    }
  },
  palette: {
    divider: "#E6E8F0"
  },
  typography: {
    fontFamily: '"Poppins", sans-serif'
  }
});
