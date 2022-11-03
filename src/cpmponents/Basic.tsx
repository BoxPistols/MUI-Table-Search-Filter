// [Material-UI テーブル内の行を検索でフィルターする](https://qiita.com/quryu/items/f828d37855e87ccbc49b)
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Search } from './Search';
import { Container } from '@mui/system';

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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const initialRows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export const BasicTable = ({ rows, ...props }: { rows: any }) => {

return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align='right'>Calories</StyledTableCell>
              <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, ...props: any) => {
              return (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                  <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                  <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export const SetTable = () => {
  // テーブルの行
  const [rows, setRows] = useState([...initialRows]);
  // 検索バーに入力された文字
  const [searched, setSearched] = useState('');

  return (
    <div className='App'>
      <Search
        initialRows={initialRows}
        searched={searched}
        setRows={setRows}
        setSearched={setSearched}
      />
      <BasicTable rows={rows} />
    </div>
  );
};
