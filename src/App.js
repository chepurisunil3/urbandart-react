import "./App.css";
import { CollectionsComponent } from "./collections";
import { useEffect, useState } from "react";
import { CircularProgress, Container, Grid2 } from "@mui/material";
import { Header } from "./header";
import { ProductsComponent } from "./products";

function App() {
  const [products, setProducts] = useState({
    isLoading: true,
    products: {},
    error: null,
  });
  useEffect(() => {
    fetchProducts("hdt69jfj");
  }, []);

  const fetchProducts = async (csku) => {
    const response = await fetch(
      "http://13.201.10.54:3001/products?csku=" + csku
    );
    const data = await response.json();
    setProducts({
      ...products,
      products: { ...products.products, [csku]: data },
      isLoading: false,
      error: null,
    });
  };
  return (
    <div className="App" style={{ background: "#F5F4F0", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="xl" style={{ marginTop: "50px" }}>
        <h4 style={{ textAlign: "left" }}>{"Product name"}</h4>
        <ProductsComponent products={products.products["hdt69jfj"] ?? []} />
      </Container>
    </div>
  );
}

export default App;
