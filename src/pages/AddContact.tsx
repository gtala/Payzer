import Typography from "@mui/material/Typography";
import { storeIpfsData } from "../services/ipfsStore";

export const AddContact = () => {
  const data = {
    name: "Guille",
    address: "0x1cDC2A4fF8d374D91a1161C142cc496FBF5547Ec",
  };
  storeIpfsData(data);
  return (
    <Typography variant="h2" component="h1">
      Add account
    </Typography>
  );
};