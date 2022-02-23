import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adress.css";
import Header from "../../Components/Header/Header";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddressDetails from "./adressDetails";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../Footer/Footer";
import Modal from "react-modal";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


function Address() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [user] = useAuthState(auth);
  const email = user.email;
  if(email === null){
    navigate('/');
  }


  const adressDetails = JSON.parse(window.localStorage.getItem("values"));

  return (
    <div>
      <Header />

      <div className="adress_container">
        <h1 className="add_adress">Add Delivery Address</h1>
        {adressDetails &&
          adressDetails.map((address) => {
            return (
              <Card sx={{ display: "flex" }} id="addressCard">
                <Checkbox {...label} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {address.FirstName} {address.LastName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {address.mobileNo}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {address.Email}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {address.houseNo} , {address.street} , {address.landMark}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {address.dist}, {address.state}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {address.pincode}
                    </Typography>
                    <Tooltip title="Remove Address">
                      <DeleteIcon id="deleteIcon" />
                    </Tooltip>
                  </CardContent>
                </Box>
              </Card>
            );
          })}
        <Modal isOpen={modalIsOpen} id="modal">
          <AddressDetails />
          <Button onClick={() => setModalIsOpen(false)}>Back</Button>
        </Modal>
        <Button
          variant="contained"
          size="large"
          onClick={() => setModalIsOpen(true)}
          id="add_new_adress"
        >
          ADD NEW ADDRESS
        </Button>

        <Button variant="contained" size="large" id="checkout_button">
          <Link to="/payment" id="payment_link">
          Checkout
          </Link>
        </Button>
      </div>
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default Address;
