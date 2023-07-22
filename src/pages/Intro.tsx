import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

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
        SafeAccount APP
      </Typography>
      <Divider style={{ alignSelf: "stretch", margin: "42px 0" }} />
    </Box>
  );
};

export default Intro;
