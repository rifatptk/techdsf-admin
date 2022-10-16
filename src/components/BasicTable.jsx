import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { yourTransaction } from '../constants';
import { BsArrowRight } from 'react-icons/bs';

export default function BasicTable() {
  return (
    <>
      <p className="text-theme-gray mb-[40px]">Your transaction</p>

      <Table
        sx={{
          width: '100%',
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
          },
        }}
        aria-label="simple table"
      >
        <TableBody>
          {yourTransaction.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.source}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="right">${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex justify-center items-center space-x-2 text-theme-cyan cursor-pointer hover:text-theme-blue transition-colors">
        <p className="">Load More</p>
        <BsArrowRight />
      </div>
    </>
  );
}
