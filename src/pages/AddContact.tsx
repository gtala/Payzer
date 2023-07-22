import Typography from "@mui/material/Typography";
import { listUploads, storeIpfsData } from "../services/ipfsStore";
import { Box, Divider, TextField, Theme, styled } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/SendRounded";
import Button from "@mui/material/Button";

export const AddContact = () => {
  const [userAddress, setUserAddress] = useState("");
  const [name, setName] = useState("");

  listUploads();

  return (
    <>
      <Typography variant="h2" component="h1">
        Add Contact
      </Typography>

      <Divider sx={{ margin: "32px 0 28px 0" }} />

      {/* Relay Demo */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        marginBottom="16px"
      >
        Add a new contact for your address sender transaction
      </Typography>
      <ConnectedContainer gap={3} display="flex" flexDirection="column">
        <TextField
          fullWidth
          label="Address"
          value={userAddress}
          variant="outlined"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUserAddress(event.target.value);
          }}
        />
        <TextField
          fullWidth
          value={name}
          label="Name"
          variant="outlined"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />

        <Button
          startIcon={<SendIcon />}
          variant="contained"
          onClick={() => {
            let data: any = {};
            debugger;
            data[userAddress] = {
              name: name,
            };
            storeIpfsData(data);
          }}
        >
          Add Contact
        </Button>
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
