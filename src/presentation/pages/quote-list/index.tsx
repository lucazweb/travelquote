import { Grid } from "@mui/material";
import { CircleButton, FullScreenLayout, Logo } from "../../components";
import { FaPlane } from "react-icons/fa";
import { useNavigate } from "react-router";
import { QuotesTable } from "../../components/quotes-table";
import { format } from "date-fns";

export const QuoteList = () => {
  const navigate = useNavigate();

  const rows = [
    {
      origin: "Salvador, BA",
      destiny: "Rio de Janeiro, RJ",
      ticketGoing: 332,
      ticketBack: 433,
      goingDate: new Date(2025, 8, 1).toISOString(),
      backDate: new Date(2025, 8, 12).toISOString(),
      foodExpenses: 433,
      mobilityExpenses: 122,
      leisureExpenses: 90,
    },
  ];

  return (
    <FullScreenLayout>
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid container marginTop={4} direction="row">
          <Logo />
        </Grid>
      </Grid>

      <Grid container margin="auto" sx={{ justifyContent: "center" }}>
        <Grid
          container
          marginTop={4}
          size={10}
          sx={{ justifyContent: "flex-end" }}
          direction="row"
        >
          <CircleButton
            size="large"
            variant="contained"
            onClick={() => navigate("/form")}
            startIcon={<FaPlane />}
          >
            Create new quote
          </CircleButton>
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "center" }} marginTop={3}>
        <Grid size={10} spacing={2}>
          <QuotesTable data={rows} onClickRow={(row) => console.log(row)} />
        </Grid>
      </Grid>
    </FullScreenLayout>
  );
};
