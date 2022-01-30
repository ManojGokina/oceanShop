import React from "react";
import "./payment.css";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

function Payment() {
  return (
    <div>
      <Header />
      <div className="paymentContainer">
        <h1 className="payment_title">Delivering To...</h1>

        <div>
          <Card sx={{ display: "flex" }} id="payCard">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Manoj Gokina
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  9438154919
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  manojgokina@gmail.com
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Meher Chamber, College Road, Near kali mandir chowk
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Bargarh, Odisha
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  768027
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>

        <h4 id="payment_method">Payment Method</h4>

        <div className="payment_option">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="razorPay"
                control={<Radio />}
                label="Razor Pay"
              />
              <FormControlLabel value="cod" control={<Radio />} label="COD" />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" id="pay">Proceed to Pay</Button>
        </div>
      </div>
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default Payment;