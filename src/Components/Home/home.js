import React, { useEffect, useState } from "react";
import Product from "../products/Product";
import SimpleImageSlider from "react-simple-image-slider";
import "./home.css";
import Footer from "../Footer/Footer";
import Header from "../../Components/Header/Header";
import { Category } from "../../Products/Category";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";


const images = [
  {
    url: "https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-27-MBIlgV7PA.jpg",
  },
  {
    url: "https://www.dealsshutter.com/blog/wp-content/uploads/2020/10/diwali-sale-online.jpg",
  },
  {
    url: "https://social.manorhouse.in/assets/manor_house_decor_buy_gifts_home_decor_corporate_gifts_online_banner.jpg?version=2.2.15&subv=1.8",
  },
  {
    url: "https://s3.envato.com/files/201875733/BEE-1631-Fashion%20Sale%20Banners_01_Preview4.jpg",
  },
  {
    url: "https://s3.envato.com/files/264985456/1200x628_facebook-newsfeed.jpg",
  },
  {
    url: "https://i.pinimg.com/originals/fd/0c/84/fd0c84b99f9e6c21e67773552794e8fb.jpg",
  },
];

function Home() {
  const [user] = useAuthState(auth);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setUserLoggedIn(true);
    }
  }, [user?.email]);

  setTimeout(function () {
    setUserLoggedIn(false);
  }, 2000);

  return (
    <div>
      <Header />
      {userLoggedIn ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>Logged In</strong>-sucessfully
          </Alert>
        </Stack>
      ) : null}
      <div className="home">
        <div className="home__container">
          <SimpleImageSlider
            className="Banner"
            width={1345}
            height={520}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>

        <div className="home__category">
          {Category.map((e) => (
            <Card sx={{ maxWidth: 345 }} id="card">
              <CardMedia
                id="cardImage"
                component="img"
                height="140"
                image={e.img}
                alt=""
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="home__row">
          <Product
            title="The yellow Bag"
            rating={3}
            price={29.99}
            image="https://media.istockphoto.com/photos/yellow-handbag-picture-id1154597724?k=20&m=1154597724&s=612x612&w=0&h=TDkUQF3IGOcHsCVfjqwd27nvFzm4jkBYP0oGvxvgSt0="
          ></Product>
          <Product
            title="H&M White T-Shirt"
            rating={3}
            price={10.35}
            image="https://pyxis.nymag.com/v1/imgs/bb0/eed/6358d4c5bd77144e979582eab417e32207-hanes-white-tagless.rsquare.w600.jpg"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="APPLE iPad Air (4th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Space Grey)"
            rating={5}
            price={550}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-green-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1598653759000"
          ></Product>
          <Product
            title="Fashion Men Wolf Animal 3D Printed Hooded Hoodies Men"
            rating={2}
            price={50.12}
            image="https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1XdWJXLb2gK0jSZK9q6yEgFXaW%2FFashion-Men-Wolf-Animal-3D-Printed-Hooded-Hoodies-Men-Women-s-Shinning-Wolf-Design-Sweatshirts-3D.jpg_480x480.jpg"
          ></Product>
          <Product
            title="boAt Rockerz 255 Online - Best In-Ear Bluetooth Headphones"
            rating={4}
            price={45.99}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4a9082ec-d2a5-49b5-9daa-58ee52ec5d12.png?v=1625046507"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="LG 34UC98-W UltraWide Monitor"
            rating={4.5}
            price={350}
            image="https://www.reviewgeek.com/p/uploads/2021/01/53841082.jpg"
          ></Product>

          <Product
            title="Bali 3 Seater Sofa in Blue Colour"
            rating={3.5}
            price={850}
            image="https://ii1.pepperfry.com/media/catalog/product/b/a/1600x800/bali-3-seater-sofa-in-blue-colour-by-trevi-furniture-bali-3-seater-sofa-in-blue-colour-by-trevi-furn-z9w9aj.jpg"
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="Handmade home decor"
            rating={3}
            price={50.99}
            image="https://cpimg.tistatic.com/05234103/b/4/Home-Decorative-Items.jpg"
          ></Product>
          <Product
            title="Fashion Men casual shoes"
            rating={2.5}
            price={12.56}
            image="https://rukminim1.flixcart.com/image/332/398/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=50"
          ></Product>
          <Product
            title="Hp 15-H06753 i5 11th gen 8GB|256gb SSD"
            rating={4.5}
            price={560.99}
            image="https://m.media-amazon.com/images/I/71uOkXZyteL._AC_SS450_.jpg"
          ></Product>
        </div>
        <div className="home__row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
