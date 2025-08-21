import {
  CircleButton,
  FullScreenLayout,
  Logo,
} from "@/presentation/components";
import { Grid, Paper, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegFilePdf,
  FaWhatsapp,
} from "react-icons/fa";
import { StyledItem, StyledList, StyledRow } from "./styled";
import { ShareButton } from "@/presentation/components/share-button";
import notion from "../../../assets/notion.svg";
import { useNavigate } from "react-router";

const Strong = ({ children }: PropsWithChildren) => (
  <Typography variant="subtitle2">{children}</Typography>
);

const Text = ({ children }: PropsWithChildren) => (
  <Typography variant="body2">{children}</Typography>
);

export const QuoteDetail = () => {
  const navigate = useNavigate();

  return (
    <FullScreenLayout>
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid container marginTop={4} direction="row">
          <Logo />
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid container size={10}>
          <Grid marginTop={4} direction="row" size={10}>
            <CircleButton
              size="large"
              onClick={() => navigate("/list")}
              variant="contained"
              startIcon={<FaArrowLeft />}
            >
              Back
            </CircleButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{ justifyContent: "center" }}
        marginLeft={12}
        marginRight={12}
        marginTop={2}
      >
        <Paper>
          <Grid container>
            <Grid size={6} padding={6}>
              {/* <Typography variant="h6" component="h6">
                Directions
              </Typography> */}

              <StyledList>
                <StyledItem>
                  <Strong>September, 01</Strong>
                  <StyledRow>
                    <Text>
                      Salvador, BA <FaArrowRight size={8} /> São Paulo, SP
                    </Text>
                    <Text>R$ 200,00</Text>
                  </StyledRow>
                </StyledItem>
                <StyledItem>
                  <Strong>September, 15</Strong>
                  <StyledRow>
                    <Text>
                      São Paulo, SP <FaArrowRight size={8} /> Salvador, BA
                    </Text>
                    <Text>R$ 200,00</Text>
                  </StyledRow>
                </StyledItem>

                <StyledItem>
                  <StyledRow>
                    <Text>Tickets total cost</Text>
                    <Text>R$ 200</Text>
                  </StyledRow>
                </StyledItem>
                <StyledItem>
                  <StyledRow>
                    <Text>Food total cost</Text>
                    <Text>R$ 200</Text>
                  </StyledRow>
                </StyledItem>
                <StyledItem>
                  <StyledRow>
                    <Text>Host total cost</Text>
                    <Text>R$ 200</Text>
                  </StyledRow>
                </StyledItem>
                <StyledItem>
                  <StyledRow>
                    <Text>Mobility total cost</Text>
                    <Text>R$ 200</Text>
                  </StyledRow>
                </StyledItem>

                <StyledItem style={{ background: "#f3f3f3" }}>
                  <StyledRow>
                    <Strong>Total</Strong>
                    <Strong>R$ 200</Strong>
                  </StyledRow>
                </StyledItem>
              </StyledList>
            </Grid>
            <Grid size={6} padding={6}>
              <ShareButton
                icon={<FaWhatsapp size={24} />}
                label="Share by Whatsapp"
              />
              <ShareButton
                icon={<img width={28} src={notion} />}
                label="Save at Notion"
              />
              <ShareButton
                icon={<FaRegFilePdf size={24} />}
                label="Print / Download PDF"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </FullScreenLayout>
  );
};
