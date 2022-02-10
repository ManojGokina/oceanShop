import React from "react";
import { useNavigate } from "react-router";
import "./login.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GoogleButton from "react-google-button";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
function Login() {
  let navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const token = auth.currentUser.accessToken;
        console.log(result);
        console.log(token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login_card_container">
      <Card sx={{ display: "flex" }} id="login_container">
        <form style={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h1 className="ocean_login">Log In to Ocean</h1>
            <CardContent sx={{ flex: "1 0 auto" }} id="cardContent">
              <Typography component="div" variant="h5" id="login_box">
                <label>Username</label>
                <input className="login__input" />
              </Typography>
              <Typography component="div" variant="h5" id="login_box">
                <label>Password</label>
                <input className="login__input" />
              </Typography>
              <Typography component="div" id="login_box-button-container">
                <Button variant="contained" id="login_box-button" type="submit">
                  Log In{" "}
                </Button>
              </Typography>
              <div className="login__line"></div>
              <div className="other__login__options">
                <p id="other__login">or login with</p>
              </div>
              <GoogleButton
                className="google_login"
                onClick={handleGoogleLogin}
              />

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
            id="login_image"
          />
        </form>
      </Card>
    </div>
  );
}

export default Login;
