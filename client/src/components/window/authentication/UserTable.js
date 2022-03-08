import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const columns = [
  { 
    id: 'username', 
    label: 'Username',
    align: 'left'
  },
  { 
    id: 'email', 
    label: 'Email',
    align: 'center'
  },
  {
    id: 'isAdmin',
    label: 'Is Admin',
    align: 'center'
  }
];

function createData(username, email, isAdmin, edit) {
  return { username, email, isAdmin, edit };
}

function isAdmin(value) {
    // expected bool value
    return value && <CheckIcon />
}

const rows = [
  createData('mikeJ', 'mikej@jasongodmere.me', isAdmin(true)),
  createData('tylerI', 'tyleri@jasongodmere.me', isAdmin(true)),
  createData('willP', 'willp@jasongodmere.me', isAdmin(false)),
  createData('tonyS', 'tonys@jasongodmere.me',isAdmin(true)),
  createData('tarsD', 'tarsd@jasongodmere.me', isAdmin(false)),
  createData('melG', 'melg@jasongodmere.me', isAdmin(false)),
  createData('cliffordF', 'cliffordf@jasongodmere.me', isAdmin(false)),
  createData('francesR', 'francesr@jasongodmere.me',isAdmin(true)),
  createData('roxieH', 'roxieh@jasongodmere.me', isAdmin(false)),
  createData('technoKing', 'technoking@jasongodmere.me',isAdmin(true)),
];

export default function UserTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
                <TableCell
                  key="edit"
                  align="center"
                />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell key={row.username} align="center">
                        <IconButton 
                            color="primary" 
                            aria-label="upload picture" 
                            component="span"
                            onClick={() => {
                                alert(row.username);
                              }}
                        >
                            <EditIcon />
                            <Modal
                                open={false}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{}}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Modal>
                        </IconButton>
                        <IconButton 
                            aria-label="upload picture" 
                            component="span"
                            onClick={() => {
                                alert(row.username);
                              }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}