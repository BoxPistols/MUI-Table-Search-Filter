// [Material-UI テーブル内の行を検索でフィルターする](https://qiita.com/quryu/items/f828d37855e87ccbc49b)
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { CustomTable, CustomTableContainer, CustomTableHeader } from './';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const BasicTable = ({ rows }: { rows: any }) => {
  return (
    <CustomTableContainer>
      <CustomTable sx={{ minWidth: 700 }} aria-label='customized table'>
        <CustomTableHeader>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align='right'>Calories</StyledTableCell>
            <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </CustomTableHeader>
        <TableBody>
          {rows.map((row: any, ...props: any) => {
            return (
              <StyledTableRow key={row.name}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.calories}</StyledTableCell>
                <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                <StyledTableCell align='right'>{row.protein}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </CustomTable>
    </CustomTableContainer>
  );
};
