import React, { useState } from "react";
import "./login.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GoogleButton from "react-google-button";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useUserAuth } from "../../context/userAuthContext";
import Alert from '@mui/material/Alert';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err , setErr] = useState("");
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signUp(email, password);
      console.log(email)
    } catch (err) {
           setErr(err.message)
    }
  };
  return (
    <div className="login_card_container">
      <Card
        sx={{ display: "flex" }}
        id="login_container"
        onSubmit={handleSubmit}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h1 className="ocean_login">Log In to Ocean</h1>
          <CardContent sx={{ flex: "1 0 auto" }} id="cardContent">
            {err && <Alert severity="error">{err}</Alert>}
            <Typography component="div" variant="h5" id="login_box">
              <label>Username</label>
              <input
                className="login__input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Typography>
            <Typography component="div" variant="h5" id="login_box">
              <label>Password</label>
              <input
                className="login__input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Typography>
            <Typography component="div" id="login_box-button-container">
              <Button variant="contained" id="login_box-button">
                Log In{" "}
              </Button>
            </Typography>
            <div className="login__line"></div>
            <div className="other__login__options">
              <p id="other__login">or login with</p>
            </div>
            <GoogleButton className="google_login" />

            <div className="signup__div">
              <h6 className="forgot__password">Forgot Password?</h6>
              <p className="signup">
                Don't have an account? <b>SignUp!</b>{" "}
              </p>
            </div>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 353 }}
          image="https://nationaltoday.com/wp-content/uploads/2021/06/Shopping-Cart-Day-1.jpg"
          alt="login image"
        />
      </Card>
    </div>
  );
}

export default Login;
