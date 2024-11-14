import { Container, Typography } from "@mui/material";
import "./index.css";
export const CollectionsComponent = ({
  collections,
  setSelectedCollection,
}) => {
  return (
    <Container className="collections" maxWidth="xl">
      <div
        className="outer-collections-container"
        style={{ background: "white" }}
      >
        {Object.keys(collections).map((key, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedCollection({
                  ...collections[key],
                });
              }}
              key={collections[key].cid + index}
              className="collection-maindiv"
            >
              <div className="collection">
                <div className="collection-remainingdet">
                  <div className="collection-image">
                    <img
                      src={
                        collections[key].cimage !== ""
                          ? collections[key].cimage
                          : "https://assetsc2.urbandart.com/channels/2_v2/images/place.png"
                      }
                      alt={collections[key].cname}
                    />
                  </div>
                  <p className="collection-title">{collections[key].cname}</p>
                  <div className="collection-list">
                    {Object.keys(collections[key].childs).map(
                      (childKey, index) => {
                        return index > 2 ? null : (
                          <Typography key={collections[key].cid + index}>
                            {collections[key].childs[childKey].cname}
                          </Typography>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
