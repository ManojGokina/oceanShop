import React, { useState } from "react";
import "./adress.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function AddressDetails() {
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    mobileNo: "",
    Email: "",
    houseNo: "",
    street: "",
    landMark: "",
    pincode: "",
    dist: "",
    state: "",
  });

  let name, value;
  const inputValue = (e) => {
    name = e.target.name;
    value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const saveDetails = () => {
    let details;
    let adressDetails = localStorage.getItem("values")
      ? JSON.parse(localStorage.getItem("values"))
      : null;
    if (adressDetails === null) {
      details = [];
    } else {
      details = adressDetails;
    }
    details.push(values);

    window.localStorage.setItem("values", JSON.stringify(details));
  };
  return (
    <div>
      <h1 id="details_title">Add Address Details</h1>
      <div className="details">
        <TextField
          required
          id="filled-required"
          label="First Name"
          variant="filled"
          className="inputField"
          name="FirstName"
          value={values.FirstName}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Last Name"
          variant="filled"
          className="inputField"
          name="LastName"
          value={values.LastName}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Mobile No"
          variant="filled"
          className="inputField"
          name="mobileNo"
          value={values.mobileNo}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Email"
          variant="filled"
          className="inputField"
          name="Email"
          value={values.Email}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="House No"
          variant="filled"
          className="inputField"
          name="houseNo"
          value={values.houseNo}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Street "
          variant="filled"
          className="inputField"
          name="street"
          value={values.street}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Landmark"
          variant="filled"
          className="inputField"
          name="landMark"
          value={values.landMark}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Pincode"
          variant="filled"
          className="inputField"
          name="pincode"
          value={values.pincode}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="Dist"
          variant="filled"
          className="inputField"
          name="dist"
          value={values.dist}
          onChange={inputValue}
        />
        <TextField
          required
          id="filled-required"
          label="State"
          variant="filled"
          className="inputField"
          name="state"
          value={values.state}
          onChange={inputValue}
        />
      </div>
      <Button variant="contained" onClick={() => saveDetails()}>
        Save Details
      </Button>
    </div>
  );
}

export default AddressDetails;
