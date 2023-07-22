import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DarkThemeIcon from "@mui/icons-material/Brightness4";
import LightThemeIcon from "@mui/icons-material/Brightness7";

import safeHeaderLogo from "src/assets/safe-header-logo.svg";
import { useTheme } from "src/store/themeContext";
import { useAccountAbstraction } from "src/store/accountAbstractionContext";
import { Button } from "@mui/material";
import ChainSelector from "../chain-selector/ChainSelector";

type HeaderProps = {
  setStep: (newStep: number) => void;
};

function Header({ setStep }: HeaderProps) {
  const { switchThemeMode, isDarkTheme } = useTheme();

  const { loginWeb3Auth, logoutWeb3Auth, isAuthenticated } =
    useAccountAbstraction();

  useEffect(() => {
    if (isAuthenticated) {
      setStep(1);
    } else {
      setStep(0);
    }
  }, [isAuthenticated, setStep]);

  const connectWallet = () => {
    loginWeb3Auth();
  };

  const disconnectWallet = () => {
    logoutWeb3Auth();
    setStep(0);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* App Logo */}
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setStep(0)} // go to Home
            id="app-logo-header"
            src={safeHeaderLogo}
            alt="app logo"
          />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexGrow={1}
            gap={2}
          >
            {/* chain label */}

            <Box display="flex" gap={2} alignItems="center">
              <ChainSelector />
            </Box>
            {isAuthenticated ? (
              <Button variant="contained" onClick={disconnectWallet}>
                Disconnect
              </Button>
            ) : (
              <Button variant="contained" onClick={connectWallet}>
                Connect
              </Button>
            )}

            {/* Switch Theme mode button */}
            <Tooltip title="Switch Theme mode">
              <IconButton
                sx={{ marginLeft: 2 }}
                size="large"
                color="inherit"
                aria-label="switch theme mode"
                edge="end"
                onClick={switchThemeMode}
              >
                {isDarkTheme ? <LightThemeIcon /> : <DarkThemeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
