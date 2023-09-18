import { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { SideDrawer } from "./SideDrawer";
function Header() {
  const [drawOpen, setDrawOpen] = useState<boolean>(false);
  const [headerShow, setHeaderShow] = useState<boolean>(false);

  const toggleDrawer = (value: boolean) => {
    setDrawOpen(value);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY) {
        setHeaderShow(true);
      } else {
        setHeaderShow(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app">
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? "#011f4b" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <SideDrawer open={drawOpen} toggleDrawer={toggleDrawer} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
