import * as React from "react";
import Box from '@mui/material/Box';

import Header from "./header/Header.js";
import Content from "./content/Content.js";


export default function Window() {
    return (
    <React.Fragment>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content />
          </Box>
        </Box>
    </React.Fragment>
    );
}