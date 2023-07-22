import Typography from "@mui/material/Typography";
import { listUploads, storeIpfsData } from "../services/ipfsStore";
import { TextField } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/SendRounded";
import Button from "@mui/material/Button";

export const AddContact = () => {
  const [userAddress, setUserAddress] = useState("");
  const [name, setName] = useState("");

  listUploads();

  return (
    <>
      <Typography fontSize="14px">
        Check the status of your sent transaction.
      </Typography>

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

          data["0x77A433B8e99336d5Fd52Bc5eB27175D9DBc9F9Ef"] = {
            name: "pepe",
          };

          storeIpfsData(data);
        }}
      >
        Send Transaction
      </Button>
    </>
  );
};