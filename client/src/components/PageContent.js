import * as React from 'react';
import Box from '@mui/material/Box';

import Authentication from './authentication/Authentication.js';
import AuthHeader from './authentication/AuthHeader.js';

export default function PageContent() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Current Page Header */}
        <AuthHeader onDrawerToggle={handleDrawerToggle} />

        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            {/* Current Page Content */}
            <Authentication />
        </Box>
    </Box>
  );
}