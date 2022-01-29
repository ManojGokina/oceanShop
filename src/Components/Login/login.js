import React from "react";
import './login.css';   
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Login(){
    return(
     <div>
          <Container maxWidth="sm" id="login_container">
        <Box sx={{ height: '50vh' }} >
            <h1 className="ocean_login">LogIn to Ocean</h1>
             
        </Box>
      </Container>
     </div>
    )
}

export default Login;