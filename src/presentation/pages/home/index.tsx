import { Grid, Typography } from "@mui/material";
import { FaPlane } from "react-icons/fa";
import { CircleButton } from "../../components/mui-circle-button/mui-circle-button";
import { FullScreenLayout } from "../../components/layout/full-screen";

export const Home = () => {
  return (
    <FullScreenLayout>
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid container marginTop={6} direction="row">
          <Typography
            variant="h1"
            component="h3"
            fontSize={48}
            fontFamily="Inter"
            fontWeight={400}
          >
            TravelQuote
          </Typography>
        </Grid>
      </Grid>
      <Grid marginTop={6} size={4} sx={{ justifyContent: "center" }}>
        <Typography variant="h5" align="center">
          Create travel’s quotes as fast as possible and share it easily
        </Typography>
      </Grid>
      <Grid marginTop={6} container sx={{ justifyContent: "center" }}>
        <CircleButton size="large" variant="contained" startIcon={<FaPlane />}>
          Create new quote
        </CircleButton>
      </Grid>
    </FullScreenLayout>
  );
};
