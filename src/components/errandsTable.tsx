/* eslint-disable react/react-in-jsx-scope */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import React from 'react';
import { Errand } from '../models/errands.model';

export interface ErrandsTableProps {
  errands: Errand[];
}

export const ErrandsTable = (props: ErrandsTableProps) => {
  const dispatch = useDispatch<any>();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <p>Tabela de Recados:</p>
      <Button variant="contained">Inserir Recado</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Id</TableCell> */}
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.errands.map((row: Errand) => (
              <TableRow
                key={row.idErrands}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0
                  }
                }}
              >
                {/* <TableCell component="th" scope="row">
                  {row.num + 1}
                </TableCell> */}
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined">Deletar</Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined">Editar</Button>
                </TableCell>
                <TableCell align="right">
                  {/* <Button variant="outlined">
                    {row.type === TransactionType.Income ? 'Mudar para outcome' : 'Mudar para income'}
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
