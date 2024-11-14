import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./index.css";
import { Parser } from "html-to-react";
export const ProductsComponent = ({ products }) => {
  const parser = new Parser();
  if (products.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ textAlign: "center" }}>
          No products found for this collection
        </Typography>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 20,
        listStyle: "none",
        paddingLeft: 0,
        background: "white",
        padding: "1rem",
      }}
    >
      {products.map((product) => {
        return (
          <Card
            style={{
              width: "100%",
              border: "none",
              boxShadow: "none",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src="https://assetsc2.urbandart.com/channels/2_v2/images/place.png"
                alt={product.product_name}
                style={{ width: "100%", borderRadius: "15px" }}
              />
              <Button
                style={{
                  color: "#28bb74",
                  fontWeight: "bold",
                  position: "absolute",
                  padding: "5px 30px",
                  bottom: "-10px",
                  left: "20px",
                  borderRadius: "15px",
                  border: "1px solid #DDD",
                  borderRadius: "6px",
                  background: "#FFF",
                }}
              >
                Add
              </Button>
            </div>

            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    paddingRight: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  {product.product_name}
                </Typography>
                {parser.parse(product.filters_data?.filter_icon)}
              </div>
              {product.sell_price !== product.compare_price && (
                <Typography
                  style={{
                    textDecoration: "line-through",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  {product.compare_price}
                </Typography>
              )}
              <Typography style={{ textAlign: "left", fontWeight: "bold" }}>
                {product.sell_price}
              </Typography>
              <Typography
                style={{
                  textAlign: "left",
                  color: "#808080",
                  marginTop: "5px",
                }}
              >
                {product.psummary}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
