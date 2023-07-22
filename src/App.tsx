import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "@safe-global/safe-react-components/dist/fonts.css";
import { useCallback, useState } from "react";

import Header from "src/components/header/Header";
import Providers from "src/components/providers/Providers";
import NavMenu from "./components/nav-menu/NavMenu";
import Intro from "./pages/Intro";
import Profile from "./pages/profile";
import { AddContact } from "./pages/AddContact";
import Transactions from "./pages/Transactions";
import Schedule from "./pages/Schedule";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const setStep = useCallback((newStep: number) => {
    setActiveStep(newStep);
  }, []);

  const isFirstStep = activeStep === 0;

  const showSafeCoreVideo = isFirstStep;

  const ActiveStepComponent = steps[activeStep].component;

  return (
    <Providers>
      <>
        <CssBaseline />
        <Header setStep={setStep} />

        <Box
          display="flex"
          gap={3}
          alignItems="flex-start"
          maxWidth="1200px"
          margin="60px"
        >
          {!showSafeCoreVideo && (
            <NavMenu setStep={setStep} activeStep={activeStep} steps={steps} />
          )}

          <main style={{ flexGrow: 1 }}>
            {/* Active Step Component */}
            <ActiveStepComponent setStep={setStep} />
          </main>
        </Box>
      </>
    </Providers>
  );
}

export default App;

const steps = [
  {
    // Intro step
    component: Intro,
    title: "< Back",
  },
  {
    // Relay Kit step
    component: Profile,
    title: "Profile",
  },
  {
    // Onramp Kit step
    component: Transactions,
    title: "Transactions",
  },
  {
    component: AddContact,
    title: "Add Account",
  },
  {
    component: Schedule,
    title: "Schedule",
  },
];