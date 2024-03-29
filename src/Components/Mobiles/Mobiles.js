import React from "react";
import Header from "../../Components/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import { mobilesData } from "../../Products/Mobiles";
import Footer from "../Footer/Footer";
import Tooltip from "@mui/material/Tooltip";


function Mobiles() {
  return (
    <div className="menClothes__category">
      <Header />
      <div className="menClothes__Items">
        {mobilesData.map((data) => {
          return (
            <>
              <Card sx={{ maxWidth: 350 }} id="menClothes__card">
                <CardMedia
                  id="menClothesImage"
                  component="img"
                  height="140"
                  image={data.image}
                  alt=""
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    id="menClothes__title"
                  >
                    {data.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    ${data.price}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    <Rating
                      name="half-rating"
                      defaultValue={data.rating}
                      precision={0.5}
                    />
                  </Typography>
                </CardContent>
                <IconButton aria-label="add to favorites">
                  <Tooltip title="Add to Wishlist">
                    <FavoriteIcon id="favIcon" />
                  </Tooltip>
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <Tooltip title="Add to Cart">
                    <ShoppingCartIcon id="cartIcon" />
                  </Tooltip>
                </IconButton>
              </Card>
            </>
          );
        })}
      </div>
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default Mobiles;
