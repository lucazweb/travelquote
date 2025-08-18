import { Autocomplete, Grid, TextField } from "@mui/material";
import { FullScreenLayout } from "../../components/layout/full-screen";
import { CircleButton, Logo } from "../../components";
import FormControl from "@mui/material/FormControl";
import { NumberInput } from "../../components/input-number";
import { Fastfood } from "@mui/icons-material";
import { BiBeer, BiCar } from "react-icons/bi";
import { StyledDatePicker } from "../../components/date-picker";
import { StyledWrapper } from "./styled";

export const QuoteForm = () => {
  return (
    <FullScreenLayout>
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid container marginTop={4} direction="row">
          <Logo />
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid
          container
          marginTop={4}
          direction="row"
          size={3}
          flexDirection="column"
        >
          <Grid>
            <FormControl fullWidth>
              <Autocomplete
                id="origin-select-label"
                options={[]}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Origin" />
                )}
              />
            </FormControl>
          </Grid>

          <Grid>
            <NumberInput
              fullWidth
              size="small"
              id="outlined-basic"
              label="Ticked going price"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <StyledDatePicker label="Going date" />
          </Grid>
        </Grid>
        <Grid container marginTop={4} direction="column" size={3}>
          <Grid>
            <FormControl fullWidth>
              <Autocomplete
                id="destiny-select-label"
                options={[]}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Destiny" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid>
            <NumberInput
              fullWidth
              size="small"
              id="outlined-basic"
              label="Ticked back price"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <StyledDatePicker label="Back date" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ justifyContent: "center" }}
        spacing={2}
        marginTop={4}
      >
        <Grid justifyContent="center" container size={6}>
          <Grid container size={12} justifyContent="space-between">
            <Grid alignContent="center">
              <StyledWrapper>
                <Fastfood />
                <span>How much will spent with food?</span>
              </StyledWrapper>
            </Grid>
            <Grid size={2}>
              <NumberInput
                size="small"
                fullWidth
                id="outlined-basic"
                label="Amount"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container size={12} justifyContent="space-between">
            <Grid alignContent="center">
              <StyledWrapper>
                <BiCar size={24} />
                <span>How much will spent with mobility?</span>
              </StyledWrapper>
            </Grid>
            <Grid size={2}>
              <NumberInput
                fullWidth
                id="outlined-basic"
                size="small"
                label="Amount"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container size={12} justifyContent="space-between">
            <Grid alignContent="center">
              <StyledWrapper>
                <BiBeer size={24} />
                <span>How much will spent with leisure?</span>
              </StyledWrapper>
            </Grid>
            <Grid size={2}>
              <NumberInput
                fullWidth
                id="outlined-basic"
                size="small"
                label="Amount"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ justifyContent: "center" }}
        spacing={2}
        marginTop={4}
      >
        <CircleButton size="large" variant="contained">
          Calculate
        </CircleButton>
      </Grid>
    </FullScreenLayout>
  );
};
