import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import safeHeaderLogo from "../components/header/payzer.jpeg";

type IntroProps = {
  setStep: (newStep: number) => void;
};

const Intro = ({ setStep }: IntroProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      paddingTop="72px"
      paddingLeft="100px"
    >
      <Typography variant="h1" fontSize="64px" lineHeight="76px">
        Getting Started
      </Typography>

    </Box>
  );
};

export default Intro;