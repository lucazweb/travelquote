import { Button, Grid } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <div>
        <h1>TripQuote</h1>
        <Button variant="contained" endIcon={<AccessAlarmIcon />}>
          new travel quote
        </Button>
      </div>
    </Grid>
  );
};
