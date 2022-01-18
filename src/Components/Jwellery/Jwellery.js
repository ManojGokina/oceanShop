import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Jwellery.css"
import Header from "../../Components/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Footer from "../Footer/Footer";
import Tooltip from '@mui/material/Tooltip';
import {jeweleryItems} from '../../redux/actions/jeweleryAction'

function Jewelery() {
    
  const dispatch = useDispatch();
  const { JeweleryList } = useSelector((store) => store.JeweleryList);
  console.log(JeweleryList);

  useEffect(() => {
    dispatch(jeweleryItems());
  }, [dispatch]);

  return (
    <div className="Jewelery">
      <Header />
      <div className="Jewelery__Items">
      {JeweleryList.map((data) => {
          return (
            <>
              <Card sx={{ maxWidth: 350 }} id="jewellery__card">
                <CardMedia
                  id="jeweleryImage"
                  component="img"
                  height="140"
                  image={data.image}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" id="jewellery__title">
                    {data.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    ${data.price}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    <Rating name="half-rating" defaultValue={data.rating.rate} precision={0.5} />
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
          )
        })}

      </div>
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default Jewelery;
