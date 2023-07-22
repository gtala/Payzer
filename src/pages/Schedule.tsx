import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/SendRounded";
import { TextField, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import DatePicker from "src/components/date-picker/DatePicker";
import { DropdownUser } from "src/components/dropdown-user/DropdownUser";


const Schedule = () => {
  const [value, setValue] = useState("");

  // TODO: ADD PAY FEES USING USDC TOKEN

  const schedulePayment = () => {
    console.log(value)
    alert("EXECUTE!");
    return;
  };
  return (
    <>
      <Typography variant="h2" component="h1">
        Schedule
      </Typography>

      <Divider sx={{ margin: "32px 0 28px 0" }} />

      {/* Relay Demo */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        marginBottom="16px"
      >
        Execute any Schedule
      </Typography>

      <Box display="flex" gap={3}>
        <ConnectedContainer
          display="flex"
          flexDirection="column"
          gap={2}
          alignItems="flex-start"
          flexShrink={0}
        >
          <Typography fontWeight="700">Send Transaction</Typography>

          <Typography fontSize="14px">
            Check the status of your sent transaction.
          </Typography>
          <DropdownUser />
        </ConnectedContainer>
        <ConnectedContainer gap={3} display="flex" flexDirection="column">
          <DatePicker />
          <TextField
            fullWidth
            label="Set Amount"
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
            }}
          />
          <Button
            startIcon={<SendIcon />}
            variant="contained"
            onClick={schedulePayment}
          >
            Schedule Payment
          </Button>
        </ConnectedContainer>
      </Box>
    </>
  );
};

export default Schedule;

const ConnectedContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 40px 32px;
`
);
