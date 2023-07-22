import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const DropdownUser = () => {
    const [user, setUser] = useState('')
    const handleChange = (e: any) => {
        setUser(e.target.value)
    }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select User</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={user}
        label="Select User"
        onChange={handleChange}
      >
        <MenuItem value={10}>Guillermo</MenuItem>
        <MenuItem value={20}>Pepe</MenuItem>
        <MenuItem value={30}>Naker</MenuItem>
      </Select>
    </FormControl>
  );
};
