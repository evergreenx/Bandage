/* Components */
import { Typography } from "@mui/material";
import { Counter } from "./components/Counter/Counter";

import Button from "@mui/material/Button";

export default function IndexPage() {
  return (
    <>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos
        numquam voluptates ipsa et repellendus doloribus odit. Ab quibusdam
        voluptates aut perspiciatis minus alias in explicabo consectetur.
        Impedit, a nesciunt!
      </Typography>

      <Button variant="contained">Hello world</Button>
    </>
  );
}

export const metadata = {
  title: "Bandage store || Home",
};
