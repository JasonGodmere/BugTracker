import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { 
        field: 'id', 
        headerName: 'ID'
    },
    { 
        field: 'username', 
        headerName: 'Username'
    },
    {
        field: 'email',
        headerName: 'Email'
    },
    {
        field: 'admin',
        headerName: 'Admin'
    }
];

const rows = [
  { id: 1, username: 'mikeJ', email: 'mikeJ@jasongodmere.me', admin: true },
  { id: 2, username: 'tylerI', email: 'tylerI@jasongodmere.me', admin: false },
  { id: 3, username: 'willP', email: 'willP@jasongodmere.me', admin: true },
  { id: 4, username: 'tonyS', email: 'tonyS@jasongodmere.me', admin: false },
  { id: 5, username: 'tarsD', email: 'tarsD@jasongodmere.me', admin: true },
  { id: 6, username: 'melG', email: null, admin: false},
  { id: 7, username: 'cliffordF', email: 'cliffordF@jasongodmere.me', admin: true },
  { id: 8, username: 'francesR', email: 'francesR@jasongodmere.me', admin: false },
  { id: 9, username: 'roxieH', email: 'roxieH@jasongodmere.me', admin: true },
  { id: 10, username: 'technoKing', email: 'technoKing@jasongodmere.me', admin: true },
];

export default function DataTable() {
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
}