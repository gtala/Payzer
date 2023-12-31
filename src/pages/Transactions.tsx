import styled from "@emotion/styled";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import SendIcon from "@mui/icons-material/SendRounded";
import { TextField, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { utils } from "ethers";
import { useState } from "react";
import AddressLabel from "src/components/address-label/AddressLabel";
import GelatoTaskStatusLabel from "src/components/gelato-task-status-label/GelatoTaskStatusLabel";
import SafeInfo from "src/components/safe-info/SafeInfo";
import { useAccountAbstraction } from "src/services/accountAbstractionContext";

const transferAmount = 0.01;

const Transactions = () => {
  const {
    chainId,
    chain,
    safeSelected,
    safeBalance,
    isRelayerLoading,
    relayTransaction,
    gelatoTaskId,
    setRecieverAddress,
    value,
    setValue,
    recieverAddress,
    isAuthenticated,
    loginWeb3Auth,
  } = useAccountAbstraction();

  const [transactionHash, setTransactionHash] = useState<string>("");

  // TODO: ADD PAY FEES USING USDC TOKEN

  const hasNativeFunds =
    !!safeBalance &&
    Number(utils.formatEther(safeBalance || "0")) > transferAmount;

  return (
    <>
      <Typography variant="h2" component="h1">
        Transaction
      </Typography>

      <Divider sx={{ margin: "32px 0 28px 0" }} />

      {/* Relay Demo */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        marginBottom="16px"
      >
        Execute any transactions
      </Typography>

      {!isAuthenticated ? (
        <ConnectedContainer
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Typography variant="h4" component="h3" fontWeight="700">
            To use the Relay Kit you need to be authenticated
          </Typography>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Connect
          </Button>
        </ConnectedContainer>
      ) : (
        <Box display="flex" gap={3}>
          {/* safe Account */}
          <ConnectedContainer>
            <Typography fontWeight="700">Safe Account</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              Your Safe account (Smart Contract) holds and protects your assets.
            </Typography>

            {/* Safe Info */}
            {safeSelected && (
              <SafeInfo safeAddress={safeSelected} chainId={chainId} />
            )}
          </ConnectedContainer>

          {/* Relay Transaction */}
          <ConnectedContainer
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            flexShrink={0}
          >
            <Typography fontWeight="700">Send Transaction</Typography>

            {/* Gelato status label */}
            {gelatoTaskId && (
              <GelatoTaskStatusLabel
                gelatoTaskId={gelatoTaskId}
                chainId={chainId}
                setTransactionHash={setTransactionHash}
                transactionHash={transactionHash}
              />
            )}

            {isRelayerLoading && (
              <LinearProgress sx={{ alignSelf: "stretch" }} />
            )}

            {!isRelayerLoading && !gelatoTaskId && (
              <>
                <Typography fontSize="14px">
                  Check the status of your sent transaction.
                </Typography>

                <TextField
                  fullWidth
                  label="Set Address"
                  variant="outlined"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRecieverAddress(event.target.value);
                  }}
                />

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
                  disabled={!hasNativeFunds}
                  onClick={relayTransaction}
                >
                  Send Transaction
                </Button>

                {!hasNativeFunds && chain?.faucetUrl && (
                  <Link href={chain.faucetUrl} target="_blank">
                    Request 0.5 {chain.token}.
                  </Link>
                )}
              </>
            )}

            {/* Transaction details */}
            <Stack gap={0.5} display="flex" flexDirection="column">
              <Typography>
                Transfer {value} {chain?.token}
              </Typography>

              {safeSelected && (
                <Stack gap={0.5} display="flex" flexDirection="row">
                  <AddressLabel
                    address={safeSelected}
                    showCopyIntoClipboardButton={false}
                  />

                  <ArrowRightAltRoundedIcon />

                  <AddressLabel
                    address={recieverAddress}
                    showCopyIntoClipboardButton={false}
                  />
                </Stack>
              )}
            </Stack>
          </ConnectedContainer>
        </Box>
      )}
    </>
  );
};

export default Transactions;

const ConnectedContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 40px 32px;
`
);