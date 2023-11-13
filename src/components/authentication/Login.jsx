import { Box, TextField } from "@mui/material";
import { Button } from "antd";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignInSubmit() {
    try {
      await signIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
      <Box
        sx={{
          width: "350px",
          height: "400px",
          textAlign: "center",
          backgroundColor: "#6899f2",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 5 }}>
          <TextField onChange={(e) => setEmail(e.target.value)} label="email" />
        </Box>
        <Box>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="password"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "80px",
            mt: 7,
          }}
        >
          <Button onClick={handleSignInSubmit}>Sign in</Button>
        </Box>
        <Box>
          You have an account?{" "}
          <Link style={{ color: "blue" }} to="/register">
            Зарегистрируйтесь сейчас.
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
