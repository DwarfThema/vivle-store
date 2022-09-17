import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { CardMedia } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const UrlLink = styled.a``;

const Home: NextPage = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get(`http://www.vivlepark.synology.me:8080/todb`).then((res) => {
      const random = res.data.data.sort(() => Math.random() - 0.5);
      setAssets(random);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            display: "flex",
          }}
        >
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Assets
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {assets?.map((asset: any) => (
              <Grid item key={asset.id} xs={12} sm={6} md={2}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    href={asset.linkUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <CardMedia
                      component="img"
                      image={asset.photoUrl}
                      sx={{
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        objectFit: "scale-down",
                      }}
                    />
                  </a>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column-reverse",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 15,
                      }}
                    >
                      {asset.assetName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </>
  );
};

export default Home;
