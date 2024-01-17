import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container, Typography } from "@mui/material";
import { Product } from "@/types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export default function CenteredTabs({ data }: { data: Product }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Container>
      <Box sx={{ width: "100%", bgcolor: "background.paper", py: "34px" }}>
        <Tabs
          sx={{
            borderBottom: "1px solid #ECECEC ",
          }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Description" />
          <Tab label="Additional Information" />
          <Tab
          disabled
          label="Reviews(0)" />
        </Tabs>

        <TabPanel value={value} index={0}>
          {data.description}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography>brand : {data.brand}</Typography>

          <Typography>category : {data.category}</Typography>
        </TabPanel>
      </Box>
    </Container>
  );
}
