import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type ProfileProps = {
  setStep: (newStep: number) => void;
};

const Profile = ({ setStep }: ProfileProps) => {
  return (
    <>
      <Typography variant="h2" component="h1">
        Profile View
      </Typography>

      <Divider style={{ margin: "32px 0 28px 0" }} />

      {/* OnRamp Demo */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        marginBottom="16px"
      >
        UserName
      </Typography>
    </>
  );
};

export default Profile;
