import Typography from "@mui/material/Typography";
import { listUploads } from "../services/ipfsStore";
import { Box, Divider, Theme, styled } from "@mui/material";
import  SliderComponent  from "src/components/slider-component/SliderComponent";

export const Servicies = () => {

  listUploads();

  return (
    <>
      <Typography variant="h2" component="h1">
        Services
      </Typography>

      <Divider sx={{ margin: "32px 0 28px 0" }} />

      {/* Relay Demo */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        marginBottom="16px"
      >
        Choose one of our main wallets
      </Typography>
      <ConnectedContainer gap={3} display="flex" flexDirection="column">
       <SliderComponent />
      </ConnectedContainer>
    </>
  );
};

const ConnectedContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 40px 32px;
`
);
