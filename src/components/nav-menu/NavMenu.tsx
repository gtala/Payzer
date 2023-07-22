import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";

type NavMenuProps = {
  setStep: (newStep: number) => void;
  activeStep: number;
};

const NavMenu = ({ setStep, activeStep }: NavMenuProps) => {
  return (
    <NavMenuContainer
      padding="16px"
      display="flex"
      flexDirection="column"
      gap={2}
      minWidth="368px"
    >
      <MenuList>
        <NavItem onClick={() => setStep(1)} active={activeStep === 1}>
          <Typography fontWeight="700" fontSize="20px">
            Profile
          </Typography>
        </NavItem>
        <NavItem onClick={() => setStep(2)} active={activeStep === 2}>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Transactions
          </Typography>
        </NavItem>
      </MenuList>
    </NavMenuContainer>
  );
};

export default NavMenu;

const NavMenuContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  
  border: 1px solid ${theme.palette.border.light};
`
);

const NavItem = styled(MenuItem)<{
  theme?: Theme;
  active: boolean;
}>(
  ({ theme, active }) => `
  
  border-radius: 10px;
  
  border: 1px solid ${
    active ? theme.palette.primary.dark : theme.palette.border.light
  };

  margin-bottom: 16px;
  padding: 16px 22px;
  display: flex
`
);
