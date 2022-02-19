import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';

import Users from './Users.js';

export default function Authentication() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>

      {/* Authentication sub-pages (currently just one) */}
      <Users/>

    </Paper>
  );
}
