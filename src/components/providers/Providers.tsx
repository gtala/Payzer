import { ThemeProvider } from "src/services/themeContext";
import { AccountAbstractionProvider } from "src/services/accountAbstractionContext";

const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <ThemeProvider>
      <AccountAbstractionProvider>{children}</AccountAbstractionProvider>
    </ThemeProvider>
  );
};

export default Providers;
