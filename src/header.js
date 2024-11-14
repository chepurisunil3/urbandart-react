import { Container } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
export const Header = () => {
  return (
    <>
      <Container maxWidth="xl">
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>
            <span className="text-xs">Contact us 24/7 </span>
            <a className="text-xs">+1 50 537 53 084</a>
          </div>

          <div style={{ flex: 1 }}>
            <a
              className="text-xs"
              style={{ textAlign: "center", display: "block" }}
            >
              The biggest sale ever 50% off
            </a>
          </div>

          <div style={{ flex: 1, textAlign: "right" }}>
            <a className="text-xs">Wishlist</a>
            <a className="text-xs">Account</a>
          </div>
        </div>
      </Container>
      <Container maxWidth="xl">
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 0.5rem",
            borderRadius: "20px",
            alignItems: "center",
            background: "white",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>
            <a
              className="text-xs"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Urbandart
            </a>
          </div>
          <div className="links-div" style={{ flex: 1, textAlign: "center" }}>
            <a>Dashboard</a>
            <a>Team</a>
            <a>Projects</a>
            <a>Calendar</a>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            <LightModeIcon style={{ width: 50, padding: 5 }} />
            <ShoppingCartIcon style={{ width: 50, padding: 5 }} />
            <SearchIcon style={{ width: 50, padding: 5 }} />
          </div>
        </div>
      </Container>
    </>
  );
};
