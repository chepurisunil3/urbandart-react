import "./App.css";
import { CollectionsComponent } from "./collections";
import { useEffect, useState } from "react";
import { CircularProgress, Container, Grid2 } from "@mui/material";
import { Header } from "./header";
import { ProductsComponent } from "./products";

function App() {
  const [collections, setCollections] = useState({
    isLoading: true,
    data: null,
    error: null,
    products: null,
  });
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [products, setProducts] = useState({
    isLoading: true,
    products: {},
    error: null,
  });
  useEffect(() => {
    fetchCollections();
  }, []);

  useEffect(() => {
    if (selectedCollection) {
      if (!products.products.hasOwnProperty(selectedCollection.csku)) {
        setProducts({
          ...products,
          isLoading: true,
          error: null,
        });
        fetchProducts(selectedCollection.csku);
      }
    }
  }, [selectedCollection]);

  const fetchCollections = async () => {
    const response = await fetch("http://13.201.10.54:3001/collections");
    const data = await response.json();
    const updatedData = {};
    Object.keys(data).forEach((key, i) => {
      if (Object.keys(data[key].childs).length > 0)
        updatedData[key] = data[key];
    });
    Object.keys(updatedData).forEach((key, i) => {
      if (i == 0) {
        setSelectedCollection(data[key]);
      }
      updatedData[key + "1"] = updatedData[key];
    });
    setCollections({
      ...collections,
      isLoading: false,
      data: updatedData,
      error: null,
    });
  };

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
      {collections.isLoading ? (
        <Container className="parent-div" maxWidth="xl">
          <Grid2
            width={"100%"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress />
          </Grid2>
        </Container>
      ) : (
        <>
          <div style={{ marginTop: "50px" }}>
            <h4>Collections</h4>
            <CollectionsComponent
              collections={collections.data}
              setSelectedCollection={setSelectedCollection}
            />
          </div>
          {products.isLoading ? (
            <Container className="parent-div" maxWidth="xl">
              <Grid2
                width={"100%"}
                height={"100vh"}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress />
              </Grid2>
            </Container>
          ) : (
            <Container maxWidth="xl" style={{ marginTop: "50px" }}>
              <h4 style={{ textAlign: "left" }}>
                {selectedCollection?.cname ?? "Select a collection"}
              </h4>
              <ProductsComponent
                products={products.products[selectedCollection.csku] ?? []}
              />
            </Container>
          )}
        </>
      )}
    </div>
  );
}

export default App;
