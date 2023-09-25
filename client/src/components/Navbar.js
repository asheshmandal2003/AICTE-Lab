import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
            flexGrow: 1, display: { xs: "flex", md: "" },
            width: 4,
            height: 4,
          }}>
            <Box sx={{
              flexGrow: 1, display: { xs: "flex", md: "" },
              width: 40,
              height: 40,
            }}>
              <img src="/images/aictelablogo.png" alt="aictelab"></img>
            </Box>
            <Box sx={{
              flexGrow: 1, display: { xs: "flex", md: "" },
              width: 40,
              height: 40,
            }}>
              <img src="/images/jiscelogo.png" alt="aictelab"></img>
            </Box>
            <Box sx={{
              flexGrow: 1, display: { xs: "flex", md: "" },
              width: 40,
              height: 40,
            }}>
              <img src="/images/jisgrouplogo.png" alt="aictelab"></img>
            </Box>
            <Box sx={{
              flexGrow: 1, display: { xs: "flex", md: "" },
              width: 40,
              height: 40,
            }}>
              <img src="/images/IIClogo.png" alt="aictelab"></img>
            </Box>
            <Box sx={{
              flexGrow: 1, display: { xs: "flex", md: "" },
              width: 40,
              height: 40,
            }}>
              <img src="/images/iqaclogo.png" alt="aictelab"></img>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => navigate("/labs")}>Home</MenuItem>
              <MenuItem>Labs</MenuItem>
              <MenuItem>Mentors</MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={() => navigate("/labs")}>Home</MenuItem>
            <MenuItem>Labs</MenuItem>
            <MenuItem>Mentors</MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
