import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Electronics.css";
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
import { electronicsItems } from "../../redux/actions/electronicsAction";
import CircularProgress from "@mui/material/CircularProgress";

function Electronics() {
  const dispatch = useDispatch();
  const { ElectronicsList, loading } = useSelector(
    (store) => store.ElectronicsList
  );
  useEffect(() => {
    dispatch(electronicsItems());
  }, [dispatch]);

  return (
    <div className="electronics__category">
      <Header />
      <div className="electronics__Items">
        {loading ? (
          <CircularProgress  className="loader"/>
        ) : (
          <>
            {ElectronicsList.map((data) => {
              return (
                <Link to={`/productDetails/${data.id}`} id="link">
                  <Card sx={{ maxWidth: 350 }} id="gadjets__card" key={data.id}>
                    <CardMedia
                      id="electronicsImage"
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
                        id="electronics__title"
                      >
                        {data.title}
                      </Typography>

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
                </Link>
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

export default Electronics;
