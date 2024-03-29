import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./WomenClothing.css";
import Header from "../../Components/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Footer from "../Footer/Footer";
import Tooltip from "@mui/material/Tooltip";
import { womenClothingItems } from "../../redux/actions/womensClothingAction";
import CircularProgress from "@mui/material/CircularProgress";

function WomenClothing() {
  const dispatch = useDispatch();
  const { womensProductsList, loading } = useSelector(
    (store) => store.womensProductsList
  );

  useEffect(() => {
    dispatch(womenClothingItems());
  }, [dispatch]);

  return (
    <div className="womenClothes__category">
      <Header />
      <div className="womenClothes__Items">
        {loading ? (
          <CircularProgress className="loader" />
        ) : (
          <>
            {womensProductsList.map((data) => {
              return (
                <>
                  <Card sx={{ maxWidth: 350 }} id="womenClothes__card">
                    <CardMedia
                      id="womenClothesImage"
                      component="img"
                      height="140"
                      image={data.image}
                      alt=""
                    />
                    <CardContent>
                      <Link to={`/productDetails/${data.id}`} id="link">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          id="womenClothes__title"
                        >
                          {data.title}
                        </Typography>
                      </Link>
                      <Typography gutterBottom variant="h5" component="div">
                        ${data.price}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="div">
                        <Rating
                          name="half-rating"
                          defaultValue={data.rating.rate}
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
          </>
        )}
      </div>
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default WomenClothing;
